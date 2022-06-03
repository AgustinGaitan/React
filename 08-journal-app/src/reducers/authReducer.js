import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { types } from '../types/types';


// export const authReducer = (state = {}, action) =>{

//     switch(action.type){
//         case types.login:
//             return{
//                 uid: action.payload.uid,
//                 name:action.payload.displayName

//             }
//         case types.logout:
//             return {}
//         default:
//             return state;
//     }
// }

const login = createAction(types.login);
const logout = createAction(types.logout);
const initialState = {uid:123123123};

export const authReducer = createReducer(initialState, (builder) =>{

    builder
    .addCase(login, (state = {}, action) =>{
        return{
            uid: action.payload.uid,
            name:action.payload.displayName

        }
    })
    .addCase(logout, (state = {},action)=>{
        return {}
    })
    .addDefaultCase((state = {},action)=> {});

});


// export const { authReducer } = reducer.actions;

// export default reducer.reducer;


// export const reducer = createSlice({
//     name: 'auth',
//     initialState: {},
//     reducers:{
//         authReducer: (state = {}, action) => {

//                 switch(action.type){
//                     case types.login:
//                         return{
//                             uid: action.payload.uid,
//                             name:action.payload.displayName

//                         }
//                     case types.logout:
//                         return {}
//                     default:
//                         return state;
//                 }

//         },
//     },
// });

// export const { authReducer } = reducer.actions;

// export default reducer.reducer;