import React, { useContext, useState, useEffect } from 'react';
//import el context
import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

  //extrae si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyectoactual } = proyectosContext;
  //obtener los datos del context de tarea
  const tareasContext = useContext(TareaContext);
  const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea} = tareasContext;
  //state del formulario
  const [ tarea, setTarea ] = useState({
    nombre: '',
  })
  
  useEffect(() => {
    if(tareaseleccionada !== null){
      setTarea(tareaseleccionada);
    } else {
      setTarea({
        nombre: ''
      })
    }
  }, [tareaseleccionada])

  //si no hay proyecto seleccionado
  if(!proyectoactual) return null;

  //destructuring del state
  const { nombre } = tarea;
  //leer los valores del formulario 
  const handleChangle = e => {
    setTarea({
      ...tarea,
      [e.target.name] : e.target.value
    })
  }
  //array destructuring
  const [proyectoActual] = proyectoactual;
  //cuando el usuario le de submit al formulario
  const onSubmit = e => {
    e.preventDefault();

    //validar
    if(nombre.trim() === ''){
      validarTarea();
      return;
    }

    //verifica si estamos agregando una nueva tarea o estamos editando
    if(tareaseleccionada === null) {
    //nueva tarea 
      //agregar la nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);

    } else {
    //editando una tarea
      actualizarTarea(tarea);
      //limpia la tarea seleccionada
      limpiarTarea();
    }


    //Seleccione todas las tareas con el id del proyectoActual
    obtenerTareas(proyectoActual.id);

    //reiniciar el form
    setTarea({
      nombre: ''
    })

  }

  return (  
    <div className='formulario'>
      <form
        onSubmit={onSubmit}
      >
        <div className='contenedor-input'>
          <input 
            type='text' 
            className='input-text' 
            placeholder='Nombre Tarea...' 
            name='nombre' 
            value={nombre}
            onChange={handleChangle}
          />
        </div>
        <div className='contenedor-input'>
          <input 
            type='submit'
            value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
            className='btn btn-block btn-primario btn-submit'
          />
        </div>
      </form>
      {errortarea ? <p className='mensaje error'>El nombre de la tarea es obligatorio</p> : null}
    </div>
  );
}
 
export default FormTarea;