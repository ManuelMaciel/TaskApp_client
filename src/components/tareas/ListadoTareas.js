import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
const ListadoTareas = () => {

  //extraer los datos del context
  const proyectosContext = useContext(proyectoContext);
  const { proyectoactual, eliminarProyecto } = proyectosContext;
  //si no hay proyecto seleccionado
  if(!proyectoactual) return <h2>Selecciona un proyecto</h2>;
  //array destructuring para extraer datos del proyecto actual
  const [proyectoActual] = proyectoactual;
  //Elimina el proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  }

  const tareasProyecto = [
    {id: 1, nombre: 'Crear la Base de Datos', estado: true},
    {id: 2, nombre: 'Seleccionar el Hosting', estado: false},
    {id: 3, nombre: 'Hacer el Front', estado: true},
    {id: 4, nombre: 'Hacer el Back', estado: false}
  ];

  return (  
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className='listado-tareas'>
        {tareasProyecto.length === 0 
        ? (<li className='tarea'>
              <p>No hay tareas</p>
          </li>) 
        : tareasProyecto.map(tarea => (
            <Tarea 
               key={tarea.id}
               tarea={tarea}
            />
          ))  
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