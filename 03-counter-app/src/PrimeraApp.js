//import React from "react";
import PropTypes from 'prop-types';

//import { Fragment } from "react";         <Fragment> </Fragment>


const PrimeraApp = ( {saludo, subtitulo} ) =>{  
    
    return (

        <>
            <h1>{saludo}</h1>
            {/* <pre> {JSON.stringify(saludo, null, 3)} </pre> */}
            <p>{subtitulo}</p>
        </>
    );
}

//Que la propiedad sea X tipo, tira un warning.
PrimeraApp.propTypes = {
   // saludo: PropTypes.string   NO ES OBLIGATORIO
    saludo: PropTypes.string.isRequired
}


//Propiedades por default, sin ponerlos en los parámetros.
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}


export default PrimeraApp;