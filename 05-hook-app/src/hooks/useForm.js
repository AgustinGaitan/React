import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () =>{
        setValues(initialState);
    }
        
    const handleInputChange = ({target}) =>{
       
        setValues({
            ...values,
            [target.name] : target.value // los corchetes son para que el nombre del atributo sea el de target.name

        })
    }
    
    return [values, handleInputChange, reset];
}
