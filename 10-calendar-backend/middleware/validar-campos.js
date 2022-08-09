const {response} = require('express');
const {validationResult} = require('express-validator');

//next es una función que llama al siguiente middleware
//npm i express validator  (validador de express)

const validarCampos = (req, res = response, next) =>{

    //Manejo de errores
    const errores = validationResult(req);
    
    if(!errores.isEmpty()){

        /*se usa return para impedir que se ejecute 
        la otra response (en este caso el next para que no se llame al otro middleware)*/
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }

    next();

}


module.exports = {
    validarCampos
}