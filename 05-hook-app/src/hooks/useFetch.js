import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {
  //https://www.breakingbadapi.com/api/quotes/1

  const [state, setState] = useState({
      data: null,
      loading: true,
      error: null
    });

    useEffect(() => {
        
        fetch(url)
        .then( resp => resp.json())
        .then( data => {


            setState({
                loading:false,
                error:null,
                data
            });

        })

    }, [url])
    
    return state;
}
