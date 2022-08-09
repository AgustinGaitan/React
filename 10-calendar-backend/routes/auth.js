/*
    Rutas:
    host + api/auth/new   POST
    host + api/auth/      POST
    host + api/auth/renew GET
*/
const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middleware/validar-campos');
const router = Router();
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/authController');


//El path es el de index + el de acá
router.post(
    '/new',
    [ //middlewares
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio.').isEmail(), 
        check('password','La contraseña debe tener 6 caracteres').isLength({min: 6}),
        validarCampos 

    ] ,
    crearUsuario
);


router.post('/',
    [
       
        check('email','El email es obligatorio.').isEmail(), 
        check('password','La contraseña debe tener 6 caracteres').isLength({min: 6}),  
        validarCampos 

    ],
    loginUsuario
);


router.get('/renew',revalidarToken);


module.exports = router;