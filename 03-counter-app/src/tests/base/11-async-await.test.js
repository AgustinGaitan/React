import { getImagen } from "../../base/11-async-await";


describe('Test en 11-async-await.js', () => {

    test('Debe retornar el url de la imagen', async ()=>{

        const url = await getImagen();
      

        expect( url.includes('https://') ).toBe( true );
        
    });

});