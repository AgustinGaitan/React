

// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola, mundo`;


// console.log(saludar);
// console.log(saludar2('Jorge'));
console.log(saludar3('Jorge'));
console.log(saludar4());


const getUser = () =>{
    return {
        uid: 'ABC123',
        username: 'Jorgelin',
    }
}


const getUsuarioActivo = (nombre, clave) =>({
   
        uid:'ABC123',
        username: nombre });


const user = getUser();
console.log(user);

console.log(getUser());

