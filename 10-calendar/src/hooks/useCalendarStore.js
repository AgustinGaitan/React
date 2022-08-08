import { useSelector, useDispatch } from "react-redux";
import { onSetActiveEvent } from "../store";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);


    const setActiveEvent = (calendarEvent) =>{

        dispatch(onSetActiveEvent(calendarEvent)); //Hago dispatch y le mando el calendarEvent en el payload

    }


    return{
        //Propiedades
        events,
        activeEvent,

        //Metodos
        setActiveEvent
    }
}
