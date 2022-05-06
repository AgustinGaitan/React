import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { HookApp } from './HookApp';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <HookApp/>
  // <CounterApp/>
  // <CounterWithCustomHook />
  // <SimpleForm />
  // <FormWithCustomHook />
  <MultipleCustomHooks />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
