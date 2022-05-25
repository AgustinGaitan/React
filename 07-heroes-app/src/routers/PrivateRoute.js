import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

/*Se le pasa por props los componentes hijos

                <PrivateRoute>
                  <DashboardRoutes/>
                </PrivateRoute>

En este caso se le pasa dashboard routes como prop 
con el nombre children

*/
export const PrivateRoute = ({children}) => {

  const {user} = useContext(AuthContext);
  const {pathname, search} = useLocation();

  localStorage.setItem('lastPath', pathname + search); //Guardo el ultimo path visitado


  return user.logged ? children : <Navigate to='/login'/>
}
