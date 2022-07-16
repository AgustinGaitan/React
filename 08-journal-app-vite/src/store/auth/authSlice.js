import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
       name: 'auth',
       initialState: {
            status: 'not-authenticated', //'checking,'not-authenticated','authenticated' (estados)
            uid:null,
            email:null,
            displayName:null,
            photoURL: null,
            errorMessage: null
        },
        reducers: {
           login: (state, {payload}  ) => { //Obtiene todos los datos del payload (del dispatch)
                state.status = 'authenticated', //'checking,'not-authenticated','authenticated' (estados)
                state.uid=payload.uid;
                state.email=payload.email;
                state.displayName=payload.displayName;
                state.photoURL= payload.photoURL;  
                state.errorMessage= null;   
           },
           logout:(state,{payload}) =>{
               state.status = 'not-authenticated', //'checking,'not-authenticated','authenticated' (estados)
               state.uid=null;
               state.email=null;
               state.displayName=null;
               state.photoURL= null;
               state.errorMessage=  payload.errorMessage; //Obtiene SOLO el mensaje de error en caso de que haya que desloguear
           },
           checkingCredentials: (state) =>{ //Status intermedio
               state.status = 'checking';
           }
        }
});
export const { login, logout, checkingCredentials } = authSlice.actions;