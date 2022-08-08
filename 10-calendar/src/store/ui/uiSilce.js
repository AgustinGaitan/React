import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
       name: 'ui',
       initialState: {
            isDateModalOpen: false
        },
        reducers: {
            onOpenDateModal: (state) =>{
                state.isDateModalOpen = true;

                /*
                Si no estuviese usando el tooklit, habria que hacer
                return {
                    ...state,
                    isDateModalOpen: true
                }  
                No hace falta hacerlo porque el toolkit deja hacer código mutante y cambiar el state sin lo anterior
                npm install @reduxjs/toolkit


                */
            },
            onCloseDateModal: (state) =>{
                state.isDateModalOpen = false;
            }
        }
});


export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;