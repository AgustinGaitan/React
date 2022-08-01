import { collection, doc, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export const loadNotes = async (uid = '') =>{

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];

    docs.forEach(doc =>{
        // console.log(doc.data()); //.data() para obtener la info
        notes.push({id: doc.id, ...doc.data()}); // obtengo el id y la info
    })

    console.log(notes);

    return notes;
}