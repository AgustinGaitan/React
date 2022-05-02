import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category )=>{

    const [state, setState] = useState({
        data:[],
        loading: true
    });// estado por defecto


    useEffect( ()=>{

        getGifs(category)
        .then( imgs => {
            
            
            setState({
                data: imgs,
                loading:false
            });

           
        });
        
    }, [category]);

    return state;

}