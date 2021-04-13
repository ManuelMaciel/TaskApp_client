import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListadoTareas = () => {

  //extraer los datos del context
  const proyectosContext = useContext(proyectoContext);
  const { proyectoactual, eliminarProyecto } = proyectosContext;
  //obtener los datos de las tareas
  const tareasContext = useContext(TareaContext);
  const { tareaproyecto } = tareasContext;
  //si no hay proyecto seleccionado
  if(!proyectoactual) return <h2>Selecciona un proyecto</h2>;
  //array destructuring para extraer datos del proyecto actual
  const [proyectoActual] = proyectoactual;
  //Elimina el proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  }

  return (  
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className='listado-tareas'>
        {tareaproyecto.length === 0 
        ? (<li className='tarea'>
              <p>No hay tareas</p>
          </li>) 
        : 
        <TransitionGroup>
          {
            tareaproyecto.map(tarea => (
            <CSSTransition
              key={tarea.id}
              timeout={200}
              classNames='tarea'
            >
              <Tarea 
               tarea={tarea}
              />
            </CSSTransition>
          ))
          }
        </TransitionGroup>  
        }
      </ul>
      <button
        type='button'
        className='btn btn-eliminar'
        onClick={onClickEliminar}
      >Eliminar Proyecto &times;</button>
    </Fragment>
  );
}
 
export default ListadoTareas;