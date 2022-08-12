const {response} = require('express');
const Evento = require('../models/Evento');

const getEventos = async(req, res = response)=>{ 

    res.json({
        ok: true,
        msg: 'getEventos'
    });


}


const crearEvento = async(req, res = response)=>{ 

    const evento = new Evento(req.body);

    try{

        evento.user = req.uid;

        const eventoGuardado = await evento.save();

        res.status(201).json({
            ok:true,
            eventoGuardado
        });

    }catch(error){
        console.log(error);

        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }


}

const actualizarEvento = async(req, res = response)=>{ 

    res.json({
        ok: true,
        msg: 'actualizarEvento'
    });


}

const eliminarEvento = async(req, res = response)=>{ 

    res.json({
        ok: true,
        msg: 'eliminarEvento'
    });


}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}