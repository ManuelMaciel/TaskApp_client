import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Tarea = ({tarea}) => {

  //context de proyecto
  const proyectosContext = useContext(proyectoContext);
  const { proyectoactual } = proyectosContext;
  //context de tarea
  const tareasContext = useContext(TareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

  //boton para eliminar tarea por el id
  const handleDelete = id => {
    eliminarTarea(id);
    obtenerTareas(proyectoactual[0].id);
  }
  
  //const cambia el estado de la tarea
  const cambiarEstado = tarea => {
    if(tarea.estado){
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  }

  const handleEdit = tarea => {
    guardarTareaActual(tarea);
    console.log(tarea)
  }

  return (  
    <li className='tarea sombra'>
      <p>{tarea.nombre}</p>
      <div className='estado'>
        {tarea.estado 
        ?
          (
            <button
              type='button'
              className='completo'
              onClick={() => cambiarEstado(tarea)}
            >Completo</button>
          )
        :
          (
            <button
              type='button'
              className='incompleto'
              onClick={() => cambiarEstado(tarea)}
            >Incompleto</button>
          )
        }
      </div>
      <div className='acciones'>
        <button
          type='button'
          className='btn btn-primario'
          onClick={() => handleEdit(tarea)}
        >Editar</button>
        <button
          type='button'
          className='btn btn-secundario'
          onClick={() => handleDelete(tarea.id)}
        >Eliminar</button>
      </div>
    </li>
  );
}
 
export default Tarea;