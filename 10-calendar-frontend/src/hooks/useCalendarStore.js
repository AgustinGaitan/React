import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth); //usuario activo
    const {events, activeEvent} = useSelector(state => state.calendar);


    const setActiveEvent = (calendarEvent) =>{

        dispatch(onSetActiveEvent(calendarEvent)); //Hago dispatch y le mando el calendarEvent en el payload

    }


    const startSavingEvent = async( calendarEvent ) =>{


        try{

            if(calendarEvent.id){
                //Actualizando
    
                await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
    
                dispatch(onUpdateEvent({...calendarEvent, user})); //Se puede usar con el operador spread como en el ejemplo para crear un nuevo objeto.
                
                return;
    
            }
                //Creando
               
            const {data} = await calendarApi.post('/events', calendarEvent);
            
    
            dispatch(onAddNewEvent({...calendarEvent, id: data.eventoGuardado.id, user}));

        }catch(error){

            console.log(error);
            Swal.fire('Error al modificar', error.response.data.msg,'error');
        }
      
        
 
        

    }


    const startDeletingEvent = async() =>{

        try{

            await calendarApi.delete(`/events/${activeEvent.id}`);
            dispatch(onDeleteEvent());


        }catch(error){
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg,'error');
        }

       
    }


    const startLoadingEvents = async() =>{ //Traigo todos los eventos

        try{

            const {data} = await calendarApi.get('/events');
            
            const events = convertEventsToDateEvents(data.eventos);
            
            dispatch(onLoadEvents(events));

        }catch(error){

            console.log('Error cargando eventos');

        }
    }

    return{
        //Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, // DE NULL A TRUE, Y DE TRUE A FALSE

        //Metodos
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}
