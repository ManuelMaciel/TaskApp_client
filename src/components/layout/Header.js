import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (  
    <div className='app-header'>
      <p className='nombre-usuario'>Hola <span>Manuel</span></p>

      <nav className='nav-principal'>
        {/* <a href='#!'>Cerrar Sesion</a> */}
        <Link to={'/'} > Cerrar Sesion </Link>
      </nav>
    </div>
  );
}
 
export default Header;