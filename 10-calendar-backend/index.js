const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config(); // const dot = require('dotenv');  dot.config();

//app.use es un middleware

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//Directorio publico (public)
app.use( express.static('public'));

//Lectura y parseo del body

app.use(express.json());


//Rutas:
app.use('/api/auth', require('./routes/auth')); //Todo lo que exporte routes/auth va a esa ruta (/api/auth/.....)
//CRUD: Eventos




//Escuchar peticiones

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});