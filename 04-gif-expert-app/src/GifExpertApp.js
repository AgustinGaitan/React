import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    //const categories = ['Cats','Dogs','Chinchillas'];

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
        <AddCategory />
        <hr/>


        <ol>
            {   
                //solo cosas que retornan algo
                categories.map( (category) =>{ 
                        //el key debe ser unico. (por ahora no lo es)
                    return <li key={category}> {category} </li>
                })
            }
        </ol>
    </>
  )
}
