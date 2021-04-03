import React, { Fragment, useState, useContext } from 'react';
//importamos el context
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

  //obtener state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario } = proyectosContext;


  //State para el proyecto
  const [ project, setProject ] = useState({
    nombre: ''
  });
  //Funcion para setear el nombre del proyecto
  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name] : e.target.value
    })
  }
  //Destructuring del state
  const { nombre } = project;
  //cuando el usuario envia el proyecto
  const onSubmitProject = e => {
    e.preventDefault();

    //validar el campo

    // enviar al state

    // reiniciar el form
  }

  return (  
    <Fragment>
      <button 
        type='button' 
        className='btn btn-block btn-primario'
      >Nuevo Proyecto</button>

      {/* Verifica si el state del formulario esta true y muesta el form */}
      {formulario 
      ?
        (
          <form
            className='formulario-nuevo-proyecto'
            onSubmit={onSubmitProject}
          >
            <input 
              type='text'
              className='input-text'
              placeholder='Nombre del Proyecto'
              name='nombre'
              value={nombre}
              onChange={onChangeProject}
            />
            <input
              type='submit'
              className='btn btn-block btn-primario'
              value='Agregar Proyecto'
            />
          </form>
        )
      :
        null
      }
    </Fragment>
  );
}
 
export default NuevoProyecto;