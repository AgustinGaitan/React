
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
    loading: false,
    msgError: null
}

export const notesReducer = createReducer(initialState, (builder) =>{

    builder
    .addCase(setError, (state = {}, action) =>{
        return{
            ...initialState,
            msgError: action.payload


        }
    })
    .addCase(removeError, (state = {},action)=>{
        return {
            ...initialState,
            msgError: null
        }
    }).addCase(startLoading, (state = {}, action)=>{
        return{
            ...initialState,
            loading:true
        }

    }).addCase(finishLoading, (state = {}, action )=>{
        return{
            ...initialState,
            loading:false
        }
    })
    .addDefaultCase((state = {},action)=> initialState);

});