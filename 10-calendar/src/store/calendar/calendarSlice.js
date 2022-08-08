import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const temporalEvent = {
    _id: new Date().getTime(),
    title:'Cumpleaños',
    notes:'Nota de ejemplo',
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor: '#fafafa',
    user:{
      _id:'123',
      name:'Agustin'
    }
};

export const calendarSlice = createSlice({
       name: 'calendar',
       initialState: {
            events:[
                temporalEvent
            ],
            activeEvent: null
        },
        reducers: {
            onSetActiveEvent:(state, {payload})=>{
                state.activeEvent = payload;
            },
            onAddNewEvent: (state, {payload}) =>{
                state.activeEvent = null;
                state.events.push(payload);
            },
            onUpdateEvent: (state, {payload}) =>{

                state.events = state.events.map( event =>{

                    if(event._id == payload._id){ //Si el id del payload es igual al de un evento ya existente, se updatea el evento de la iteracion

                        return payload;

                    }

                    return event;
                });
            },
            onDeleteEvent: (state) =>{

                if(state.activeEvent){
                    //Retorno todos los que no sean iguales al que quiero borrar, entonces directamente no se guarda en el state.events
                    state.events = state.events.filter( event => event._id !== state.activeEvent._id);
                    state.activeEvent = null;
                }

                //acá no se usaría if(!state.activeEvent) return;  porque retornaría un nuevo estado vacio.

            }


        }
});
export const {onSetActiveEvent,onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;