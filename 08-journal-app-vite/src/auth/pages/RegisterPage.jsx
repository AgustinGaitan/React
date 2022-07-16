import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData={
  email:'agustin@gmail.com',
  password:'123456',
  displayName:'Agustin Gaitan'
}

//Validacion casera
const formValidations ={
  email:[(value)=> value.includes('@'), 'El correo debe de tener una @'],
  password:[(value)=> value.lenght >= 6, 'La contraseña debe de tener más de 6 letras.'],
  displayName:[(value)=> value.lenght <= 1, 'El nombre es obligatorio']
  
}


export const RegisterPage = () => {

  const {
    displayName, 
    email,
    password, 
    onInputChange, 
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  
  } = useForm(formData, formValidations);

  console.log(displayNameValid);

  const onSubmit = (event) =>{
    event.preventDefault(); 
    console.log(formState);

  }

  return (
    <AuthLayout title='Crear cuenta'>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Tu nombre"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={ !displayNameValid }
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt:2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="correo@google.com"
                fullWidth
                name='email'
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
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </Grid>

            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  variant='contained'
                  fullWidth
                >
                  Crear cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid 
              container
              direction='row'
              justifyContent='end'
            >
              <Typography sx={{mr:1}}>¿Ya tenes una cuenta?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
              </Link>
            </Grid>
          </Grid>

        </form>
    </AuthLayout>
  )
}
