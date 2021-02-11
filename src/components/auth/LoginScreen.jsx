import React from 'react';
import { Link } from 'react-router-dom';

// import { isLoginFormValid } from '../../helpers/isLoginFormValid';

import { useForm } from '../../hooks/useForm';

import './login.css';
import '../../styles/components/links.css';

const LoginScreen = (components) => {

  // console.log(components);

  const [ formLoginValues, handleLoginInputChange ] = useForm({
    lEmail: 'alejandro@outlook.com',
    lPassword: '123456'
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = ( e ) => {
    e.preventDefault();
    console.log('Login');
  }
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h3 className="auth__title">Login</h3>
          <form
            onSubmit={ handleLogin }
            className="animate__animated animate__fadeIn animate__faster"
          >
            <div className="mb-3">
              <input
                className="form-control"
                name="lEmail"
                required
                onChange={ handleLoginInputChange }
                placeholder="Correo"
                type="email"
                value={ lEmail }
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="lPassword"
                required
                onChange={ handleLoginInputChange }
                placeholder="Contraseña"
                type="password"
                value={ lPassword }
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>

            <div className="mb-3">
              <Link
                to="/auth/register"
                className="link"
              >
                Create new account!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
