const express = require('express');
require('dotenv').config(); // const dot = require('dotenv');  dot.config();



//Crear el servidor de express
const app = express();


//Rutas
// app.get('/', (request, response)=>{

//     response.json({
//         ok:true
//     });

// });

//Directorio publico (public)
app.use( express.static('public'));



//Escuchar peticiones

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});