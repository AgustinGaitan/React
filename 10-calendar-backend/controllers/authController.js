const {response} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const {generarJWT} = require('../helpers/jwt');

//express.response por si el intellisense no funciona (en este caso desestructurado)
//req request  res response

const crearUsuario = async(req, res = response)=>{ 

    const {email, password} = req.body;
    try{

        let usuario = await Usuario.findOne({email}); //Verifica si el mail ya existe en la BD

        if(usuario){
            return res.status(400).json({
                ok:false,
                msg: 'El correo está en uso.'
            });
        }
        usuario = new Usuario( req.body );

        //Encriptar contraseña

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);

        await usuario.save();
        //Generar JWT
        const token = await generarJWT(usuario.id, usuario.name);
    
        res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        });

    }catch(error){

       res.status(500).json({
            ok: false,
            msg:'Error. Hable con el administrador'
       });

    }


}


const loginUsuario =  async(req, res = response)=>{ 

   const {email, password } = req.body;

   try{

        const usuario = await Usuario.findOne({email}); //Verifica si el mail ya existe en la BD

        if( !usuario ){
            return res.status(400).json({
                ok:false,
                msg: 'Email o contraseña incorrectos.'
            });
        }

        //Confirmar las contraseñas
        
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if(!validPassword){
            
            return res.status(400).json({
                ok:false,
                msg:'Email o contraseña incorrectos.'
            })

        }

        //Generar JWT   
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok:true,
            uid:usuario.id,
            name:usuario.name,
            token
        });


   }catch(error){
        res.status(500).json({
            ok: false,
            msg:'Error. Hable con el administrador'
        });
   }


}


const revalidarToken = async(req, res = response)=>{ 

    const {uid, name} = req;

    //Generar el nuevo JWT
    const token = await generarJWT(uid, name);

    res.json({
        ok:true,
        token
    });

}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};