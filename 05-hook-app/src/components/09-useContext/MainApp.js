import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {

  const [user, setUser] = useState({});

  return (

    //Se manda el user y la funcion para setearlo. (Si no le pongo 
    // SetUser: setUser, le pone el mismo nombre que la funcion/obj por default)
    <UserContext.Provider value={{
      user,
      setUser,
    }}>

      <AppRouter/>

    </UserContext.Provider>

  )
}
