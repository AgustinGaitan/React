import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
  
  const {heroId} = useParams();
  const navigate = useNavigate();

  const hero = useMemo( ()=> { //Se usa el useMemo para que no se ejecute devuelta en caso de que no sea necesario
    return getHeroById(heroId);
  },[ heroId ]);

  const handleReturn = () =>{
    navigate( -1 ); // con el -1 va a la pagina anterior
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;
  
  if(!hero){ //Por si el usuario escribe una URL  y no existe
    return <Navigate to='/' />
  }

  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={ imagePath } 
          alt={ superhero } 
          className='img-thumbnail animate__animated animate__fadeInLeft'
        
        />
      </div>
      <div className="col-8">
        <h3>{ superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
          <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
          <li className="list-group-item"><b>First appearance: </b>{ first_appearance }</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
