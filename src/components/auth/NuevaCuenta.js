import React, { useState } from 'react';
//importar link del react-router-dom
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

  //useState para iniciar sesion
  const [ user, setUser ] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  })
  //Destructuring del state
  const { nombre, email, password, confirmar } = user;

  //se ejecuta cuando el usuario tipee en los campos
  const onChangeSignin = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  };
  //cuando el user envia los datos del form
  const onSubmitSignin = e => {
    e.preventDefault();

    //Validar campos vacios

    //Passwords 6 caracteres

    //Los dos passwords debens ser iguales

    //enviarlo al action
  };


  return (  
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Obtener una cuenta</h1>
        <form
          onSubmit={onSubmitSignin}
        >
          <div className='campo-form'>
            <label htmlFor='nombre'>Nombre</label>
            <input 
              type='text'
              id='nombre'
              name='nombre'
              placeholder='Coloca tu Nombre'
              value={nombre}
              onChange={onChangeSignin}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input 
              type='email'
              id='email'
              name='email'
              placeholder='Coloca tu Email'
              value={email}
              onChange={onChangeSignin}
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
              onChange={onChangeSignin}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='confirmar'>Confirmar Password</label>
            <input 
              type='password'
              id='confirmar'
              name='confirmar'
              placeholder='Confirmar tu Password'
              value={confirmar}
              onChange={onChangeSignin}
            />
          </div>
          <div className='campo-form'>
            <input 
              type='submit'
              className='btn btn-primario btn-block'
              value='Registrar Cuenta'
            />
          </div>
        </form>
        <Link to={'/'} className='enlace-cuenta'>
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
}
 
export default NuevaCuenta;