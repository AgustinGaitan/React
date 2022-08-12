import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
       name: 'name',
       initialState: {
            status:'checking', //'authenticated, 'not-authenticated'
            user:{},
            errorMessage: undefined
        },
        reducers: {
            onChecking: (state) =>{
                state.status = 'checking';
                state.user = {};
                state.errorMessage = undefined;
            },
            onLogin: (state, {payload}) =>{
                state.status = 'authenticated';
                state.user = payload;
                state.errorMessage = undefined;
            },
            onLogout: (state, {payload}) =>{
                state.status = 'not-authenticated'
                state.user = {};
                state.errorMessage = payload; //Recibo el error message del payload
            },
            clearErrorMessage: (state) =>{
                state.errorMessage = undefined;
            }
        }
});
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;