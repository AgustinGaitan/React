import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'; // npm install query-string , transforma al query en un json

import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  

  const {q = ''} = queryString.parse(location.search);

 

  const [formValues, handleInputChange] =  useForm({
    searchText: q,
  });

  const {searchText} = formValues;
  //const heroesFiltered = getHeroesByName(q); //Uso el hook useMemo para que no se ejecute getHeroesByName cada vez que cambia el input.
  const heroesFiltered = useMemo(()=> getHeroesByName(q),[q]); //useMemo retorna lo que tiene que memorizar, en este caso getHeroesByName

  const handleSearch = (e) =>{
    e.preventDefault();//Evitar refresh
    console.log(searchText);
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
        <h1>Search</h1>
        <hr/>

        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>
            <hr/>
            <form onSubmit={ handleSearch }>
                <input 
                  type="text"
                  placeholder="Buscar un héroe"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ handleInputChange }
                />
                <button 
                  className="btn btn-outline-primary mt-1"
                  type="submit"
                >
                  Buscar...
                </button>
            </form>
          </div>
          <div className='col-7'>
              <h4>Resultados</h4>
              <hr/>
              {
                (q==='') 
                ?
                <div className='alert alert-info'> Buscar un héroe </div>
                :
                (heroesFiltered.length === 0) 
                &&
                <div className='alert alert-danger'> No hay resultados : { q } </div>
              }
              {
                heroesFiltered.map(hero => (
                  <HeroCard
                    key={hero.id}
                    {...hero}
                  
                  />
                ))
              }
          </div>
        </div>
    </>
  )
}
  