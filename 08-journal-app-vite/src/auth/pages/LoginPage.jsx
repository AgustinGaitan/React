import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import {useForm} from '../../hooks';
import {startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { loginWithEmailPassword } from '../../firebase/providers';

export const LoginPage = () => {

  //Obtengo el status 
  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const {email,password, onInputChange} =useForm({
    email:'agustin@gmail.com',
    password:'123456'
  });


  //isAuthenticataing se usa en el login y el de Google para disablear
  const isAuthenticating = useMemo( () => status === 'checking', [status]); //Si el status cambia se va a obtener el nuevo valor



  const onSubmit = (event) =>{
    event.preventDefault();

    dispatch(startLoginWithEmailPassword({email, password}))
  }

  const onGoogleSignIn = () =>{

    dispatch(startGoogleSignIn());
    console.log('OnGoogleSignIn');
  }

  return (
    <AuthLayout title='Login'>
        <form onSubmit ={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt:2}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container>
            <Grid 
                item 
                xs={12}
                display={!!errorMessage ? '':'none'} //doble negacion significa que pasa de null a false y de false a true.
              >
                <Alert
                  severity='error'
                >
                  {errorMessage}
                </Alert>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  variant='contained'
                  fullWidth
                  disabled ={isAuthenticating} //Si el status es "checking" está disabled
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  variant='contained'
                  fullWidth
                  onClick={onGoogleSignIn}
                  disabled ={isAuthenticating} //Si el status es "checking" está disabled
                >
                  <Google/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid 
              container
              direction='row'
              justifyContent='end'
            >
              <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
              </Link>
            </Grid>
          </Grid>

        </form>
    </AuthLayout>
  )
}
