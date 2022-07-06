import { pokemonApi } from '../../../api/pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) =>{
    return  async ( dispatch, getState ) =>{
        dispatch( startLoadingPokemons() );

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
        // const data = await resp.json(); //Forma tradicional

        //con axios solamente se pone la parte dinamica porque la estática ya esta declarada en pokemonApi.js
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`);   

       
        dispatch( setPokemons({pokemons: data.results, page: page + 1}) );
    }   
}