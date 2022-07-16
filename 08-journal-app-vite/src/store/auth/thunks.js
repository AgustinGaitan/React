import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login} from "./";

export const checkingAuthentication = (email, password) =>{
    return async ( dispatch ) =>{
        
        dispatch( checkingCredentials());
    }
}


export const startGoogleSignIn = () =>{
    return async (dispatch) =>{

        dispatch( checkingCredentials());
        const result = await signInWithGoogle(); //Se loguea con google
        if(!result.ok){         // Si no salió bien, desloguea y muestra el msj de error
            return dispatch(logout( result.errorMessage ));
        }

        dispatch(login(result));  //Envía los datos del usuario mediante el result (que tiene el uid, photo, etc)
    }
}