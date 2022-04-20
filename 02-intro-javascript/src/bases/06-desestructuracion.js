
//Desestructuracion
//Asignación desestructurante

const persona = {
    nombre: 'Jorge',
    edad: 45,
    clave: 'Jorge123',
    rango: 'Soldado'
};


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornarPersona = ({clave, nombre, edad, rango = 'Capitán'}) => {

    //const {nombre, edad, clave} = user;  //extrae la data.  {asd : nombreVariable}
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.5125,
            lng:-12.525,
        }
    }
}

const {nombreClave, anios, latlng: {lat,lng}} = retornarPersona(persona);


console.log(nombreClave, anios);
console.log(lat,lng);