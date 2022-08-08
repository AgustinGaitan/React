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
            }
        }
});
export const {onSetActiveEvent } = calendarSlice.actions;