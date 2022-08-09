const {response} = require('express');


//express.response por si el intellisense no funciona (en este caso desestructurado)
//req request  res response

const crearUsuario = (req, res = response)=>{ 

    const {name, email, password } = req.body;

    res.status(201).json({
        ok:true,
        msg:'register',
        name,
        email,
        password
    });

}


const loginUsuario = (req, res = response)=>{ 

   const {email, password } = req.body;

    res.json({
        ok:true,
        msg:'login',
        email,
        password
    });

}


const revalidarToken = (req, res = response)=>{ 

    res.json({
        ok:true,
        msg:'renew'
    });

}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};