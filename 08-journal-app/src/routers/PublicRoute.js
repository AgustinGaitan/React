import { useContext } from 'react';
import { Navigate, Redirect,Route} from 'react-router-dom';


// export const PublicRoute = ({children}) => {

//     const {user} = useContext(AuthContext);

//   return !user.logged ? children : <Navigate to='/marvel'/>
// }


export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  return (
      <Route { ...rest }
          component={ (props) => (
              ( isAuthenticated )
                  ? ( <Redirect to="/" /> )
                  : ( <Component { ...props } /> )
          )}
      
      />
  )
}
