const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middleware/validar-campos');
const {getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/eventsController');
const { validarJWT } = require('../middleware/validar-jwt');
const {isDate} = require('../helpers/isDate');


const router = Router();

router.use( validarJWT ); //Para que el middleware esté implementado en todas las rutas, asi no se repite el mismo middleware



router.get('/', getEventos);

router.post('/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','La fecha de inicio es obligatoria').custom(isDate),
        check('end','La fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],      
    crearEvento
);

router.put('/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','La fecha de inicio es obligatoria').custom(isDate),
        check('end','La fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
actualizarEvento
);

router.delete('/:id', eliminarEvento);

module.exports = router;