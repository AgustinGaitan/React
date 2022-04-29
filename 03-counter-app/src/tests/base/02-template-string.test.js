import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => { 

    test(' getSaludo debe retornar hola nombre!', () => { 
        
        const nombre = 'Agustin';

        const saludo = getSaludo( nombre );
        expect( saludo ).toBe('Hola ' + nombre + '!' );
    });


    //getSaludo tiene que retornar Hola Jorge si no hay argumento en el nombre

    test('getSaludo tiene que retornar Hola Jorge! si no hay argumento en el nombre', () => { 
        

        const saludo = getSaludo();
   
        expect( saludo ).toBe('Hola Jorge!' );
    });
});