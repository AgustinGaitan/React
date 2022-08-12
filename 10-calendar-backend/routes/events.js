const {Router} = require('express');
const {check} = require('express-validator');
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/eventsController');
const { validarJWT } = require('../middleware/validar-jwt');


const router = Router();

router.use( validarJWT ); //Para que el middleware esté implementado en todas las rutas, asi no se repite el mismo middleware



router.get('/', getEventos);

router.post('/', crearEvento);

router.put('/:id', actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router;