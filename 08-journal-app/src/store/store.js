import thunk from 'redux-thunk';
import {compose, applyMiddleware } from 'redux';
import {authReducer}  from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = configureStore({
    reducer: {
        auth:authReducer
    },
    composeEnhancers: applyMiddleware(thunk)
});
