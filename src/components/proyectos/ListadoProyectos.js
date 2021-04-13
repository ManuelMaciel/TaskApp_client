import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
//importamos el context
import proyectoContext from '../../context/proyectos/proyectoContext';
//importamos el transition group
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoProyectos = () => {
  //obtiene los proyectos del initialState
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
    //eslint-disable-next-line
  }, [])

  //no retorna nada si proyectos esta vacio
  if(proyecto.length === 0) return <p>No hay proyectos, comienza creando uno</p>;
  return ( 
    <ul className='listado-proyectos'>
      <TransitionGroup>
        {proyecto.map(p => (
          <CSSTransition
            key={p.id}
            timeout={200}
            classNames='proyecto'
          >
            <Proyecto 
              p={p}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
   );
}
 
export default ListadoProyectos;