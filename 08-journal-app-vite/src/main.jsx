import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournalApp } from './JournalApp';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store';
import './styles.css'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <JournalApp />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
