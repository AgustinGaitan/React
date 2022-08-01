//Tareas asíncronas
import { doc, setDoc,collection } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadNotes } from '../../helpers';
import { addNewEmpityNote, setActiveNote,savingNewNote, setNotes } from './journalSlice';

export const startNewNote = () =>{

    return async(dispatch, getState) =>{

        dispatch(savingNewNote())
        const {uid} = getState().auth; // saco el UID del usuario autenticado

        console.log('startNewNote');
        
        const newNote ={
            title: '',
            body:'',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

        await setDoc( newDoc, newNote);
        
        newNote.id = newDoc.id;

        dispatch(addNewEmpityNote(newNote));
        dispatch(setActiveNote(newNote));
    
    }

}

export const startLoadingNotes = () =>{

    return async(dispatch, getState) => {

        const {uid} = getState().auth; 

        if( !uid ) throw new Error('El UID no existe');

        const notes = await loadNotes( uid );

        dispatch(setNotes(notes));
    }

}