import React, { useEffect, useState } from 'react'
import { AuthRouter  } from './AuthRouter';
import {JournalScreen} from '../components/journal/JournalScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{

        firebase.auth().onAuthStateChanged( (user)=>{
            
            if( user?.uid ){
                dispatch(login(user.uid, user.displayName)); //aunque recargue sigue logueado
                setIsLoggedIn(true);
            }

            setChecking(false);

        });

    },[ dispatch, setChecking, setIsLoggedIn ]); // se ejecuta una sola vez por que están las dependencias vacías


    if(checking){
        return(
            <h1>Espere...</h1>
        )
    }

  return (
    <Router>
        <div>
            <Switch>
                 {/* No me deje ir al login si estoy logueado */}
                <PublicRoute
                    path="/auth"
                    isAuthenticated={isLoggedIn}
                    component={ AuthRouter }
                />

                {/* No me deja entrar si no estoy logueado */}
                <PrivateRoute 
                    exact
                    isAuthenticated={ isLoggedIn }
                    path="/"
                    component={ JournalScreen }
                />

                <Redirect to='/auth/login' />
            </Switch>
        </div>
    </Router>
  )
}
