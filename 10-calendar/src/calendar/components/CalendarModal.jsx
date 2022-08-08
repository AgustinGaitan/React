import { useEffect, useMemo, useState } from "react";
import { addHours } from "date-fns";
import Modal from "react-modal";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { differenceInSeconds } from "date-fns/esm";
import Swal from "sweetalert2";
import {useCalendarStore, useUiStore} from './../../hooks/';
import 'sweetalert2/dist/sweetalert2.min.css'; 


registerLocale('es',es);

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


export const CalendarModal = () => {

    // const [startDate, setStartDate] = useState(new Date());

    const {activeEvent,startSavingEvent} = useCalendarStore();
    const {isDateModalOpen, closeDateModal} = useUiStore(); //Traigo la propiedad del state y el método para cerrar el modal

    const [formSubmitted, setFormSubmitted] = useState(false)

  
    const [formValues, setFormValues] = useState({ //Nueva nota
        title:'',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    });

    const titleClass = useMemo(()=>{ //Cambia la clase del titulo del form

        if(!formSubmitted) return '';

        return (formValues.title.length > 0) ? '' : 'is-invalid';

    },[formValues.title, formSubmitted]);

    useEffect(() =>{

        if( activeEvent != null){
            setFormValues({...activeEvent}); //por las dudas uso spread
        }

    },[activeEvent])

    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    };


    const onCloseModal = () =>{
        console.log('Cerrando modal.');
        closeDateModal();
        
    };

    const onDateChange = (event, changing) =>{

        setFormValues({
            ...formValues,
            [changing]: event
        });

    }

    const onSubmit = async(event) =>{
        event.preventDefault();

        setFormSubmitted(true);

        //Diferencias de horarios (que no sea negativo para que la fecha de fin sea anterior a la de empezar)
        const difference = differenceInSeconds(formValues.end, formValues.start);

        if(isNaN(difference) || difference <= 0){

            Swal.fire({
                title:'Fechas incorrectas',
                text: 'Revisar las fechas ingresadas',
                icon:'error'
            });

            return;
        }

        if(formValues.title.length <= 0) return;

        

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSubmitted(false);
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        selected={formValues.start}
                        onChange={ (event)=> onDateChange(event,'start')}
                        className='form-control'
                        dateFormat='Pp'
                        showTimeSelect //Muestra la hora al lado para seleccionar
                        locale='es' //Español
                        timeCaption="Hora"
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        minDate={formValues.start}
                        selected={formValues.end}
                        onChange={ (event)=> onDateChange(event,'end')}
                        className='form-control'
                        dateFormat='Pp'
                        showTimeSelect
                        locale='es'
                        timeCaption="Hora"
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
