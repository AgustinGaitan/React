const {response} = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req,res = response, next) =>{

    //HEADERS = x-token
    const token = req.header('x-token')
    
    if(!token){
        return res.status(401).json({
            ok: false,
            msg:'No hay token en la petición'
        })
    }

    try{

        const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);

        req.uid = payload.uid;    //Guardo el uid en el request, para despues agarrarlo desde el controller
        req.name = payload.name; //Guardo el nombre en el request, para despues agarrarlo desde el controller
        

    }catch(error){

        return res.status(401).json({
            ok:false,
            msg:'Token no válido'
        })

    }
    next();

}

module.exports = {
    validarJWT
}