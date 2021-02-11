import React from 'react';
import { Link } from 'react-router-dom';

import { paths } from '../../helpers/paths';

const Navbar = () => {

  const handleLogout = () => {
    // dispatch( startLogout() );
    console.log('handleLogout');
  }

  return (
    <>
      <div className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Bienvenido
          </span>

          <button
            className="btn btn-outline-danger"
            onClick= { handleLogout }
          >
            <i className="fas fa-sign-out-alt"></i>
            <span className="ms-1">Salir</span>
          </button>
        </div>
        
      </div>

      <div className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0">
            
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb align-items-center">
                <li className="breadcrumb-item"><Link to={ paths.main }>Home</Link></li>
                <li className="breadcrumb-item"><Link to={ paths.setup }>Setup</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Overall Information</li>
              </ol>
            </nav>
          </span>

          <button
            className="btn btn-outline-danger"

          >
            <i className="fas fa-sun"></i>
            <span className="ms-1">Observable</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
