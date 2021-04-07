import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
//importamos el context
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
  //obtiene los proyectos del initialState
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
  }, [])

  //no retorna nada si proyectos esta vacio
  if(proyecto.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
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