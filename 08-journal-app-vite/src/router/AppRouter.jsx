import {Route, Routes} from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';


export const AppRouter = () => {



  return (
    <Routes>
        {/* Login y registro /// Cualquier path que le siga a auth */}
        <Route path="/auth/*" element={ <AuthRoutes/>} />


        {/* Journal App  ///Cualquier otra ruta que no sea auth, dirige a JournalRoutes*/}
        <Route path="/*" element={ <JournalRoutes/>}  />

    </Routes>
  )
}
