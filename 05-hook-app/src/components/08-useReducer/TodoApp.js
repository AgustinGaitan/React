import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { todoReducer } from './todoReducer';



const init = () =>{

    return JSON.parse(localStorage.getItem(' todos')) || [];
    //**en este caso retorna un array vacio o si hay, 
    //lo guardado en el local storage. 
};

export const TodoApp = () => {

    // initial state vacio. El init computa y gestiona el estado
    // inicial, en este caso retorna un array vacio o si hay, 
    //lo guardado en el local storage **. 
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    

    //Manejo el form con las funciones que trae el array de useForm
    const [ {description}, handleInputChange, reset ] = useForm({
        description:''
    });

    useEffect( ()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const handleDelete = ( todoId ) =>{

        const action ={
            type: 'delete',
            payload: todoId
        }


        dispatch(action);
    }


    const handleToggle = (todoId) =>{
        
        dispatch({
            type:'toggle',
            payload: todoId
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }
        const newTodo ={
            id: new Date().getTime(),
            desc: description,
            done: false,
        };
        
        const action = {
            type: 'add',
            payload: newTodo,
        }

        dispatch( action );
        reset();
    }


  return (
    <div>
        <h1>TodoApp ( {todos.length} )</h1>
        <hr/>

        <div className='row'>

            <div className='col-7'>

            <ul className='list-group list-group-flush'>
            {
                todos.map( (todo,i) => (
                    <li
                        key={todo.id}
                        className='list-group-item'             
                    > 
                    <p  className={`${ todo.done && 'complete'}`}
                        onClick={ () => handleToggle(todo.id)}>{i+1}. {todo.desc}</p> 
                    <button
                        className='btn btn-danger'
                        onClick={ () => handleDelete(todo.id) }
                    >
                        Borrar
                    </button>
                    </li>
                ))
            }

        </ul>

            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr/>
                <form onSubmit={ handleSubmit }>
                    <input 
                        type='text'
                        className='form-control'
                        name='description'
                        placeholder='Aprender ...'
                        autoComplete='off'
                        value={description}
                        onChange={ handleInputChange }
                    />

                    <button
                        type='submit'
                        className='btn btn-outline-primary mt-1 btn-block'
                    >
                        Agregar
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}
