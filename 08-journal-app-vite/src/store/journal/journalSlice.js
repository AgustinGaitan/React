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
                state.messageSaved = '';
            },
            setNotes: (state,action)=>{
                state.notes = action.payload;
            },  
            setSaving: (state)=>{
                state.isSaving = true;
                state.messageSaved = '';
            },
            updateNote: (state,action)=>{
                state.isSaving = false;
                state.notes = state.notes.map( note => {
    
                    if ( note.id === action.payload.id ) {
                        return action.payload;
                    }
    
                    return note;
                });
    
                state.messageSaved = `${ action.payload.title }, actualizada correctamente`;


            },
            setPhotosToActiveNote:(state,action)=>{
                state.active.imageUrls = [...state.active.imageUrls, ...action.payload];// imagenes anteriores + nuevas
                state.isSaving = false;
            },
            clearNotesLogout:(state)=>{
                state.isSaving = false;
                state.messageSaved ='',
                state.notes=[],
                state.active = null;
            },
            deleteNoteById: (state,action)=>{
                state.active = null;
                state.notes = state.notes.filter(note => note.id !== action.payload);
            },


        }
});
export const { 
    addNewEmpityNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout
    } = journalSlice.actions;