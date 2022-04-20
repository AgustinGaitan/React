
//Desestructuracion en arrays

const personas = ['Agustin', 'Jorge', 'Raul'];

const [ , , p3] = personas;


const retornaArray = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArray();

console.log(letras, numeros);

//Desestructuracion de arrays con funciones incluidas.
const usarEstado = (valor) =>{
    return [valor, ()=> {console.log('Hola mundo.')}];
}

const [nombre, setNombre] = usarEstado('Jorgelin');


console.log(nombre);

setNombre();