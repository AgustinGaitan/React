import {getHeroById} from './bases/08-imp-exp';
import {getOwnerById} from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject)=>{

//     setTimeout(() => {
//         const heroe = getHeroById(2);
//         //console.log(heroe);

//         resolve(heroe);
//         //reject('No se pudo encontrar el heroe');

//     }, 2000);

// });

// promesa.then( (heroe) =>{
//     console.log('heroe', heroe);
// }).catch(err =>{
//     console.warn(err);
// });



const getHeroeByIdAsync = ( id ) =>{

    return new Promise( (resolve, reject)=>{

        setTimeout(() => {
            const heroe = getHeroById(id);
            //console.log(heroe);
            
            if(heroe){
                resolve(heroe);
            }else{

                reject('No se pudo encontrar el heroe');
            }
    
        }, 2000);
    
    });
}

// getHeroeByIdAsync(1)
// .then( heroe =>{
//     console.log('Heroe', heroe);
// }).catch( err =>{
//     console.warn(err);
// });

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);