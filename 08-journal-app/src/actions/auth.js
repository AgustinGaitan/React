import {types} from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { finishLoading, startLoading } from './ui';


export const startLoginEmailPassword = (email, password) =>{

    return (dispatch) =>{ //Thunk deja llamar al dispatch dentro de la funcion poniendolo como param.


        dispatch( startLoading() );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( async  ({user}) => {
            dispatch(login( user.uid, user.displayName))

            dispatch( finishLoading() );

        })
        .catch(e =>
        {
            console.log(e);
            dispatch( finishLoading() );
        });
    }

}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{

    return (dispatch) =>{ //Thunk deja llamar al dispatch dentro de la funcion poniendolo como param.
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async  ({user}) => {

            await user.updateProfile({ displayName: name }); //actualiza el displayname

            dispatch(
                login( user.uid, user.displayName)
            )
        })
        .catch(e =>
        {
            console.log(e);
        });
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

export const startLogout = () =>{
    return async (dispatch) =>{

        await firebase.auth().signOut(); //async/await para esperar a que se ejecute.

        dispatch(logout());
    }
}


export const logout = () =>({

    type: types.logout

})