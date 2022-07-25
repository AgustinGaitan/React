import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() =>{

    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;
        return{
            ok: true,
            //info del usuario
            displayName,
            email,
            photoURL,
            uid
        }

    }
    catch(error){
        console.log(error);
        return{
            ok: false
        }
    }
}


export const registerUserWithEmailPassword = async ({email, password, displayName}) =>{

    try{

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        //Actualizar el displayName en firebase. FirebaseAuth.currentUser trae al usuario actual automaticamente, 2do parametro es que quiero actualizar
        await updateProfile(FirebaseAuth.currentUser, {displayName}); 
        
        return{
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        }

    }catch(error){ // Error de firebase (email usado, etc)
        return {ok:false, errorMessage:error.message}
    }

}

export const loginWithEmailPassword = async({email, password}) =>{
    //signInWithEmailAndPassword
    try{

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;

        return{
            ok: true,
            uid,
            photoURL,
            displayName
        }


    }catch(error){
      
        console.log(error.message);
        return {ok:false, errorMessage:error.message}
    }
}

export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut(); //Desloguea todo (Google,Twitter,Facebook,etc)
}