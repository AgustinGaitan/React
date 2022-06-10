import thunk from 'redux-thunk';
import {compose, applyMiddleware } from 'redux';
import {authReducer}  from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from '../reducers/uiReducer';
import { notesReducer } from '../reducers/notesReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = configureStore({
    reducer: {
        auth:authReducer,
        ui: uiReducer,
        notes: notesReducer
    },
    composeEnhancers: applyMiddleware(thunk),

});
