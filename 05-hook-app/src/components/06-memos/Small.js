import React, { memo } from 'react'

export const Small = memo(({value}) => { 

    console.log(' Componente small ');
  return (
    <small>
        {value}
    </small>
  )
})


//Memo hace que solamente se 
//renderice devuelta el componente
//cuando hay cambios en los props