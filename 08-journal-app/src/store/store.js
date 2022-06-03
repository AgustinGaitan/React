import {combineReducers } from 'redux';
// import {authReducer}  from '../reducers/authReducer';
import {authReducer}  from '../reducers/authReducer';
import { configureStore } from '@reduxjs/toolkit'





export const store = configureStore({
    reducer: {
        auth:authReducer
    }
});
