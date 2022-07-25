import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle} from "../../firebase/providers";
import { checkingCredentials, logout, login} from "./";

//TAREAS ASINCRONAS
export const checkingAuthentication = (email, password) =>{
    return async ( dispatch ) =>{
        
        dispatch(checkingCredentials());
    }
}


export const startGoogleSignIn = () =>{
    return async (dispatch) =>{

        dispatch(checkingCredentials());
        const result = await signInWithGoogle(); //Se loguea con google
        if(!result.ok){         // Si no salió bien, desloguea y muestra el msj de error
            return dispatch(logout( result.errorMessage ));
        }

        dispatch(login(result));  //Envía los datos del usuario mediante el result (que tiene el uid, photo, etc)
    }
}


export const startCreatingUserWithEmailPassowrd = ({email, password, displayName}) =>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email,password,displayName});
    
        
        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid,displayName,email,photoURL}));

    }
}

export const startLoginWithEmailPassword = ({email, password}) =>{
    return async (dispatch) =>{
        dispatch(checkingCredentials());

        const resp = await loginWithEmailPassword({email,password}); //lo mismo que arriba pero no desestructurado, para visualizar mejor la desestructuracion

        if(!resp.ok) return dispatch(logout(resp.errorMessage));
        dispatch(login(resp));
    }
}

export const startLogout = () =>{

    return async( dispatch ) =>{

        await logoutFirebase();
        dispatch(logout());

    }
}