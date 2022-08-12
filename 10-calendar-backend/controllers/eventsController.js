const {response} = require('express');
const Evento = require('../models/Evento');

const getEventos = async(req, res = response)=>{ 

    const eventos = await Evento.find() //Traigo todos los eventos 
                                .populate('user','name'); //Traigo a eventos junto a sus respectivos usuarios 


    res.status(200).json({
        ok: true,
        eventos
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

    const eventoId = req.params.id; //Obtengo el id de los params
    const uid = req.uid;

    try{

        const evento = await Evento.findById(eventoId); //Me fijo si existe en la BD
       

        if(!evento){

            return res.status(404).json({ //No existe el objeto en la bd
                ok: false,
                msg:'No existe ningun evento con ese id'
            })

        }

        if(evento.user.toString() !== uid){ //Hipotetico caso de que otro usuario pueda modificar un evento que no es suyo
        
            	return res.status(401).json({   
                    ok:false,
                    msg:'No está autorizado para editar este evento'
                })

        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new : true}) // new:true para que retorne el evento actualizado

        res.json({
            ok:true,
            evento: eventoActualizado
        })


    }catch(error){

        console.log(error)

        res.status(500).json({
            ok:false,
            msg:'Error al modificar. Hable con el administrador'
        })
    }


}

const eliminarEvento = async(req, res = response)=>{ 

    const eventoId = req.params.id; //Obtengo el id de los params
    const uid = req.uid;

    try{

        const evento = await Evento.findById(eventoId); //Me fijo si existe en la BD

        if(!evento){

            return res.status(404).json({ //No existe el objeto en la bd
                ok: false,
                msg:'No existe ningun evento con ese id'
            })

        }

        if(evento.user.toString() !== uid){ //Hipotetico caso de que otro usuario pueda eliminar un evento que no es suyo
        
            return res.status(401).json({   
                ok:false,
                msg:'No está autorizado para eliminar este evento'
            });
        }

        await Evento.findByIdAndDelete(eventoId);

        res.json({ok:true, msg:'Evento eliminado con éxito'});

    }catch(error){
        

        res.status(500).json({
            ok:false,
            msg:'Error al eliminar. Hable con el administrador'
        })

    }

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