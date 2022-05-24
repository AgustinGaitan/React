import { useContext } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';


export const Navbar = () => {
    
    const navigate = useNavigate();// para navegar entre rutas
    const {user} = useContext(AuthContext); // uso el contexto para traer los datos (en este caso user)
   
    
    const handleLogout = () => {
        navigate('/login',{
            replace:true
        });
    }
    
    
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        //Cambia la clase dependiendo de la prop isActive para que esté activo o no
                        className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        //Cambia la clase dependiendo de la prop isActive para que esté activo o no
                        className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        //Cambia la clase dependiendo de la prop isActive para que esté activo o no
                        className={ ({isActive}) => 'nav-item nav-link ' + (isActive ? 'active' : '')} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span 
                        className='nav-item nav-link text-info'
                    > 
                    {user.name} {/*uso el user.name del context*/}
                    
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}