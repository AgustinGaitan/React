import { heroes } from "../data/heroes";




export const getHeroesByName = (name = '') => {

    console.log('Se ejecutó getHeroesByName.');

    if(name.length === 0){
        return [];
    }
    name = name.toLowerCase();
   return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

  

}
