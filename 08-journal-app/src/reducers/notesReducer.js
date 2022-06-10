
// {
//     notes: [],
//     active: null,
//     active:{
//         id:'assad',
//         title:'',
//         body:'',
//         imageUrl:'',
//         date:312312321
//     }
// }

import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { types } from "../types/types";



const setError = createAction(types.uiSetError);
const removeError = createAction(types.uiRemoveError);
const startLoading = createAction(types.uiStartLoading);
const finishLoading = createAction(types.uiFinishLoading);

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = createReducer(initialState, (builder) =>{

    builder
    .addDefaultCase((state = {},action)=> initialState);

});