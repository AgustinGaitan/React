
describe('Pruebas en el archivo demo.test.js', ()=>{

    test('debe ser iguales los strings', ()=>{

        //1. Inicialización
        const mensaje =  'Hola mundo!';
    
        //2. Estímulo
        const mensaje2 = `Hola mundo!`;
    
        //3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // Que sean iguales tanto por contenido como por tipo
    });



});

