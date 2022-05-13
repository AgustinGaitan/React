import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { Memorize } from './components/06-memos/Memorize';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { HookApp } from './HookApp';
import { TodoApp } from './components/08-useReducer/TodoApp';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <HookApp/>
  // <CounterApp/>
  // <CounterWithCustomHook />
  // <SimpleForm />
  // <FormWithCustomHook />
  // <MultipleCustomHooks />
  // <FocusScreen />
  // <RealExampleRef />
  // <Layout />
  // <Memorize />
  // <MemoHook />
  // <CallbackHook/>
  // <Padre/>
    <TodoApp />
);



