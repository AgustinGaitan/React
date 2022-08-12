const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const {validarCampos} = require('../middleware/validar-campos');
const {crearUsuario, loginUsuario, revalidarToken} = require('../controllers/authController');
const { validarJWT } = require('../middleware/validar-jwt');


//El path es el de index + el de acá
router.post(
    '/new',
    [ //middlewares (pasan previo a la funcion crearUsuario)
        check('name','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio.').isEmail(), 
        check('password','La contraseña debe tener 6 caracteres').isLength({min: 6}),
        validarCampos 

    ] ,
    crearUsuario
);


router.post('/',
    [//middlewares (pasan previo a la funcion loginUsuario)
       
        check('email','El email es obligatorio.').isEmail(), 
        check('password','La contraseña debe tener 6 caracteres').isLength({min: 6}),  
        validarCampos 

    ],
    loginUsuario
);

                  //middleware 
router.get('/renew',validarJWT, revalidarToken);


module.exports = router;