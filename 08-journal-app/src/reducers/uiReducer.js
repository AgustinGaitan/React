import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null
}

const setError = createAction(types.uiSetError);
const removeError = createAction(types.uiRemoveError);

export const uiReducer = createReducer(initialState, (builder) =>{

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
    })
    .addDefaultCase((state = {},action)=> initialState);

});