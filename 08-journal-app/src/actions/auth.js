import {types} from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'


export const startLoginEmailPassword = (email, password) =>{

    return (dispatch) => {
        setTimeout(() => {
            dispatch( login(123,'Agustin') );
        }, 3500);
    }

}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({user}) => {
            dispatch(
                login( user.uid, user.displayName) // Tengo el uid y el displayName de firebase (google)
            )
        });
    }
}


export const login = (uid, displayName) =>{
    return {
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}