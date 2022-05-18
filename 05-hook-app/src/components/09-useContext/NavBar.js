import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//Navlink es lo mismo que link nada mas que se le puede poner una clase si está activo (ruta == url Actual)
export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">useContext</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" aria-current="page">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" aria-current="page">Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
