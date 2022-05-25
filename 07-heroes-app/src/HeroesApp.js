import { useEffect, useReducer } from 'react';
import { AppRouter } from './routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const init = () =>{

  //si no existe el item en local storage, retorna logged:false
  return JSON.parse(localStorage.getItem('user')) || {logged:false};
}

export const HeroesApp = () => {
  /*  
    first = reducer (funcion con state y action)
    second = initialState
    third = init (para inicializar el reducer la primera vez)

  */
  //const [state, dispatch] = useReducer(first, second, third)
  const [user, dispatch] = useReducer(authReducer, {}, init )
  
  useEffect(() => {
    
    if( !user ) return;

    localStorage.setItem('user', JSON.stringify(user));

  }, [user]) 
  
  //En el provider mando la data que voy a querer usar dentro de los demas componentes. (en este caso el usuario 
  //y la funcion dispatch)
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      
      <AppRouter/>

    </AuthContext.Provider>
  )
}
