import {combineReducers } from 'redux';
import { authReducer } from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit'


const reducers = combineReducers({
    auth: authReducer
});


export const store = configureStore(reducers);