import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
  const proyecto = [
    {id: 1, nombre: 'MERN Stack'},
    {id: 2, nombre: 'Python Web Scrapping'},
    {id: 3, nombre: 'App Mascotas'}
  ]
  return ( 
    <ul className='listado-proyectos'>
      {proyecto.map(p => (
        <Proyecto 
          key={p.id}
          p={p}
        />
      ))}
    </ul>
   );
}
 
export default ListadoProyectos;