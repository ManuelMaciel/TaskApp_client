import React, { useState } from 'react';
//importar link del react-router-dom
import { Link } from 'react-router-dom';

const Login = () => {

  //useState para iniciar sesion
  const [ user, setUser ] = useState({
    email: '',
    password: ''
  })
  //Destructuring del state
  const { email, password } = user;

  //se ejecuta cuando el usuario tipee en los campos
  const onChangeLogin = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  };
  //cuando el user envia los datos del form
  const onSubmitLogin = e => {
    e.preventDefault();

    //Validar campos vacios

    //enviarlo al action
  };


  return (  
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Iniciar Sesion</h1>
        <form
          onSubmit={onSubmitLogin}
        >
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input 
              type='email'
              id='email'
              name='email'
              placeholder='Coloca tu Email'
              value={email}
              onChange={onChangeLogin}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password'
              id='password'
              name='password'
              placeholder='Coloca tu Password'
              value={password}
              onChange={onChangeLogin}
            />
          </div>
          <div className='campo-form'>
            <input 
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesion'
            />
          </div>
        </form>
        <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
}
 
export default Login;