import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';

import './login.css';
import '../../styles/components/links.css';

const RegisterScreen = () => {

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: 'Hector Alejandro',
    rEmail: 'hectoralejandro@outlook.com',
    rPassword1: '123456',
    rPassword2: '123456',

  });

  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleRgister = (e) => {
    e.preventDefault();
    console.log('Registered');

  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h3 className="auth__title">Registro</h3>
          <form
            onSubmit={ handleRgister }
            className="animate__animated animate__fadeIn animate__faster"
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="rName"
                onChange={handleRegisterInputChange}
                value={rName}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="rEmail"
                onChange={handleRegisterInputChange}
                value={rEmail}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="rPassword1"
                onChange={handleRegisterInputChange}
                value={rPassword1}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="rPassword2"
                onChange={handleRegisterInputChange}
                value={rPassword2}
              />
            </div>

            <div className="mb-3">
              <input
                type="submit"
                className="btnSubmit"
                value="Crear cuenta"
              />
            </div>

            <div className="mb-3">
              <Link
                to="/auth/login"
                className="link"
              >
                Already registered?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen