import { useSelector, useDispatch } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);


    const setActiveEvent = (calendarEvent) =>{

        dispatch(onSetActiveEvent(calendarEvent)); //Hago dispatch y le mando el calendarEvent en el payload

    }


    const startSavingEvent = async( calendarEvent ) =>{

      
        
        if(calendarEvent._id){
            //Actualizando

            dispatch(onUpdateEvent({...calendarEvent})); //Se puede usar con el operador spread como en el ejemplo para crear un nuevo objeto.
           
        }else{
            //Creando
           

            dispatch(onAddNewEvent({...calendarEvent, _id: new Date().getTime()}));
        }

    }


    const startDeletingEvent = () =>{
        dispatch(onDeleteEvent());
    }


    return{
        //Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent, // DE NULL A TRUE, Y DE TRUE A FALSE

        //Metodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent
    }
}
