import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const temporalEvent = {
//     _id: new Date().getTime(),
//     title:'Cumpleaños',
//     notes:'Nota de ejemplo',
//     start: new Date(),
//     end: addHours( new Date(), 2),
//     bgColor: '#fafafa',
//     user:{
//       _id:'123',
//       name:'Agustin'
//     }
// };

export const calendarSlice = createSlice({
       name: 'calendar',
       initialState: {
            isLoadingEvents : true,
            events:[
                // temporalEvent
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

                    if(event.id == payload.id){ //Si el id del payload es igual al de un evento ya existente, se updatea el evento de la iteracion

                        return payload;

                    }

                    return event;
                });
            },
            onDeleteEvent: (state) =>{

                if(state.activeEvent){
                    //Retorno todos los que no sean iguales al que quiero borrar, entonces directamente no se guarda en el state.events
                    state.events = state.events.filter( event => event.id !== state.activeEvent.id);
                    state.activeEvent = null;
                }

                //acá no se usaría if(!state.activeEvent) return;  porque retornaría un nuevo estado vacio.

            },
            onLoadEvents:(state, {payload = []}) =>{

                state.isLoadingEvents = false;

                payload.forEach(event =>{

                    const exists = state.events.some( dbEvent => dbEvent.id === event.id); // Si existe el evento en la bd

                    if(!exists){
                        state.events.push(event);
                    }

                })

            },
            onLogoutCalendar: (state) =>{

                state.isLoadingEvents = true;
                state.events = [];
                state.activeEvent= null;

            }


        }
});
export const {
    onSetActiveEvent,
    onAddNewEvent, 
    onUpdateEvent, 
    onDeleteEvent,
    onLoadEvents,
    onLogoutCalendar
} = calendarSlice.actions;