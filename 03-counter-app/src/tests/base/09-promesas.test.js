import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Test con promesas', () => {

    test('Debe retornar un heroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe =>{
                
                expect( heroe ).toBe( heroes[0] );

                done(); // siempre usar done
            });

    });

    test('Debe obtener error si el héroe por id no existe', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error =>{
                
                expect( error ).toBe( 'No se pudo encontrar el héroe' );

                done(); // siempre usar done
            })

    });
});