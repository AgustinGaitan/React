import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    useEffect( ()=>{
        console.log('Una sola vez');
    }, []);// Se ejecuta una sola vez

    useEffect( ()=>{
        console.log('Formstate cambió');
    }, [formState])//Se ejecuta cuando cambia el formstate


    useEffect( ()=>{
        console.log('El mail cambió');
    }, [email]) //Se ejecuta cuando cambia el mail

    const handleInputChange = ({target}) =>{
       
        setFormState({
            ...formState,
            [target.name] : target.value // los corchetes son para que el nombre del atributo sea el de target.name

        })
    }
  
    return (
        <>
        <h1>Use effect</h1>
        <hr/>

        <div className='form-group'>
            <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Tu nombre'
                autoComplete='off'
                value={ name }
                onChange= {handleInputChange}
            />
        </div>
        <div className='form-group'>
            <input
                type='text'
                name='email'
                className='form-control'
                placeholder='email@gmail.com'
                autoComplete='off'
                value={ email }
                onChange= {handleInputChange}
            />
        </div>

        { (name==='123') && <Message/>}
        </>
        

        
  )
}
