const persona = {
    nombre : 'Jorge',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad :'New York',
        zip: 525253,
        lat: 14.526,
        lng: 34.6236,
    }
};

//console.table(persona);

//const persona2 = persona; //No se hace, se copia la referencia y si la modifico, se modifica la persona1.

const persona2 = {...persona}; // Se usa el operador spread para literalmente clonar al obj y no copiar la referencia. Spread agarra informacion del objeto que se le pase

persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);