import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Tets 08-imp-ext.js', () => {


    test('Retorna un héroe por id', () => {
        	
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe retornar undefined si héroe no existe', () => {
        	
        const id = 10;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toBe(undefined);

    });

    test('Debe retornar un array con los heroes de DC', () => {

        //0,1,2
        const heros = heroes.filter(h => h.owner === 'DC');
        
        const obtainedHeros = getHeroesByOwner('DC');

        expect(heros).toEqual(obtainedHeros);

        
    });

    //usar toBe que el lenght = 2
    test('Debe retornar un array con los heroes de Marvel', () => {

        const heros = getHeroesByOwner('Marvel');

        expect(heros.length).toBe( 2 );

    });
});