import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
       name: 'journal',
       initialState: {
            isSaving: false,
            messageSaved: '',
            notes: [],
            active: null,
            // active:{
            //     id:'ABC123',
            //     title:'',
            //     body:'',
            //     date: 1312352,
            //     imageUrls:[], 
            // }
        },
        reducers: { //todo síncrono
            savingNewNote : (state) =>{
                state.isSaving = true;
            },
            addNewEmpityNote: (state, action)=>{
                //No hace falta traer las notas anteriores (con el operador spread ...)

                state.notes.push(action.payload);
                state.isSaving = false;
            },
            setActiveNote: (state,action)=>{
                state.active = action.payload; //La nota activa que tiene que aparecer en pantalla

            },
            setNotes: (state,action)=>{
                state.notes = action.payload;
            },  
            setSaving: (state)=>{

            },
            updateNote: (state,action)=>{

            },
            deleteNodeById: (state,action)=>{

            },


        }
});
export const { 
    addNewEmpityNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById,
    savingNewNote
    } = journalSlice.actions;