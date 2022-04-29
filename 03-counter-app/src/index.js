import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp'
//css
import './index.css';


const root = ReactDOM.createRoot(document.querySelector('#root'));

//root.render(<PrimeraApp saludo="Hola mundo"/>);
root.render(<CounterApp value={10}/>);
