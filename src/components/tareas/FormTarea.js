import React, { useContext } from 'react';
//import el context
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

  //extrae si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyectoactual } = proyectosContext;

  //si no hay proyecto seleccionado
  if(!proyectoactual) return null;

  //array destructuring
  const [proyectoActual] = proyectoactual;

  return (  
    <div className='formulario'>
      <form>
        <div className='contenedor-input'>
          <input 
            type='text' 
            className='input-text' 
            placeholder='Nombre Tarea...' 
            name='nombre' 
          />
        </div>
        <div className='contenedor-input'>
          <input 
            type='submit'
            value='Agregar Tarea'
            className='btn btn-block btn-primario btn-submit'
          />
        </div>
      </form>
    </div>
  );
}
 
export default FormTarea;