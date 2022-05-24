import { types } from "../types/types";
// const state = {
//     name: 'Agustin',
//     logged: true
// }


export const authReducer = ( state = {}, action ) =>{

    switch(action.type){
        case types.login:
            return {
                ...action.payload, //Esparce el payload, poniendole los mismos nombres a los attr
                logged:true
            }
        case types.logout:
            return{
                logged:false
            }
        default:
            return state;

    }
}