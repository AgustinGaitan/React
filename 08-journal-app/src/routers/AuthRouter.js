import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

export const AuthRouter = () => {
  return(

    <div className='auth__main'> {/*Se le asigna el estilo a login y register */}
        <div className='auth__box-container'>
            <Switch>
                <Route
                    exact
                    path='/auth/login'
                    component={ LoginScreen }
                />

                <Route
                    exact
                    path='/auth/register'
                    component={ RegisterScreen }
                />
                {/* Si no es ni /auth/register ni /auth/login, me redirige hacia /auth/login*/}
                <Redirect to='/auth/login' />
            </Switch>
        </div>
    </div>
  )
}
