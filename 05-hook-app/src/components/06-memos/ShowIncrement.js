import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log('Componente show increment')
  return (
    <button
        className='btn btn-primary'
        onClick={()=>{
            increment( 5 );
        }}
    >
        Incrementar
    </button>
  )
}
)