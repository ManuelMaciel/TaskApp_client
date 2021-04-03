import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

  const tareasProyecto = [
    {id: 1, nombre: 'Crear la Base de Datos', estado: true},
    {id: 2, nombre: 'Seleccionar el Hosting', estado: false},
    {id: 3, nombre: 'Hacer el Front', estado: true},
    {id: 4, nombre: 'Hacer el Back', estado: false}
  ];

  return (  
    <Fragment>
      <h2>Proyecto: App Mascotas</h2>
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
    </Fragment>
  );
}
 
export default ListadoTareas;