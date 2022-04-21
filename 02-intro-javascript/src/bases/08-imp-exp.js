//Se le pone llave a las exportaciones que no son default.
//No se le pone llaves a las que son default y se las puede llamar como queramos.

import heroes, {owners}  from '../data/heroes';



export const getHeroById = (id) => heroes.find(element => element.id === id);

// console.log( getHeroById(2) );



export const getHerosByOwner = owner => heroes.filter(element => element.owner === owner)

// console.log( getHerosByOwner('DC'));

