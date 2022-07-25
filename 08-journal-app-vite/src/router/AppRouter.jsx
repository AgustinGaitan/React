import {Navigate, Route, Routes} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {


  const status = useCheckAuth(); //Custom hook que retorna el estado actual del usuario


  if( status === 'checking'){
    return <CheckingAuth/>
  }

  return (
    <Routes>


        {
          status === 'authenticated'
          ?
          <Route path="/*" element={ <JournalRoutes/>}  /> //Cualquier otra ruta que no sea auth, dirige a JournalRoutes
          :
          <Route path="/auth/*" element={ <AuthRoutes/>} /> //Login y registro , cualquier path que le siga a auth
        }


        {/* Solo existe cuando el usuario no esté logueado} */}
        <Route path='/*' element={<Navigate to='/auth/login'/>} />






        {/* Login y registro /// Cualquier path que le siga a auth
        <Route path="/auth/*" element={ <AuthRoutes/>} />
    

        /* Journal App  ///Cualquier otra ruta que no sea auth, dirige a JournalRoutes
        <Route path="/*" element={ <JournalRoutes/>}  /> */}

    </Routes>
  )
}
