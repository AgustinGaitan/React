// import { Component, useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../auth/authContext';
import { Redirect,Route } from 'react-router-dom';
import PropTypes from 'prop-types';
/*Se le pasa por props los componentes hijos

                <PrivateRoute>
                  <DashboardRoutes/>
                </PrivateRoute>

En este caso se le pasa dashboard routes como prop 
con el nombre children

*/
// export const PrivateRoute = ({children}) => {

//   const {user} = useContext(AuthContext);
//   const {pathname, search} = useLocation();

//   localStorage.setItem('lastPath', pathname + search); //Guardo el ultimo path visitado


//   return user.logged ? children : <Navigate to='/login'/>
// }


export const PrivateRoute = ({
  isAuthenticated,
  component:Component,
  ...rest
})=>{
  return (
    <Route {...rest}
      component={(props) =>(
        (isAuthenticated)
        ? (<Component{...props} />)
        : ( <Redirect to="/auth/login"/>)
      )}
    />
  )
}


PrivateRoute.propTypes = {
  isAuthenticated : PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

