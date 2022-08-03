//Tareas asíncronas

import { doc, setDoc,collection, deleteDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { fileUpload, loadNotes } from '../../helpers';
import { addNewEmpityNote, setActiveNote,savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from './journalSlice';

export const startNewNote = () =>{

    return async(dispatch, getState) =>{

        dispatch(savingNewNote())
        const {uid} = getState().auth; // saco el UID del usuario autenticado

        console.log('startNewNote');
        
        const newNote ={
            title: 'Titulo de prueba',
            body:'Body de prueba',
            date: new Date().getTime(),
            imageUrls: new Array()
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

export const startSaveNote = () =>{
    return async(dispatch, getState) =>{

        dispatch(setSaving());

        const {uid} = getState().auth;
        const {active} = getState().journal;
    
        const noteToFireStore = {...active};
        
        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB,`${uid}/journal/notes/${active.id}`);

        await setDoc(docRef, noteToFireStore, {merge: true}); 
        // el merge sirve para unir campos que mando con campos ya existentes en firestore
        //  (si no lo pongo, se reemplaza por completo)
        console.log(active);
        dispatch(updateNote(active));
        
    }
}

export const startUploadingFiles = (files = []) =>{
    return async(dispatch) =>{
        dispatch(setSaving());

        // await fileUpload(files[0]);

        const fileUploadPromises = []; //Array de promesas

        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all( fileUploadPromises ); //ejecuta las promesas

        dispatch(setPhotosToActiveNote(photosUrls));
    }
}


export const startDeletingNote = () =>{
    return async(dispatch, getState)=>{

        const {uid} = getState().auth;
        const {active} = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`);

        await deleteDoc(docRef);

        dispatch(deleteNoteById(active.id));

    }

}