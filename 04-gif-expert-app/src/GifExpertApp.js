import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    // lo de adentro/// la funcion para setear
    const [categories, setCategories] = useState(['Cats','Dogs','Chinchillas']);

    // const handleAdd = () =>{
    //     //setCategories( [...categories, 'Frogs'] );

    //     //      primer arg = estado anterior
    //     setCategories( categories => [...categories, 'Frogs']);
    // }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>


        <ol>
            {   
                //solo cosas que retornan algo, si pongo parentesis me ahorro el 'return'
                categories.map( category =>(
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>
    </>
  )
}
