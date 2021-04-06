import React, { useReducer } from 'react';
//importamos el context y el reducer
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
//importamos los types
import { 
          FORMULARIO_PROYECTO, 
          OBTENER_PROYECTOS 
} from '../../types'

const ProyectoState = props => {

  const proyecto = [
    { id: 1, nombre: 'MERN Stack' },
    { id: 2, nombre: 'Python Web Scrapping' },
    { id: 3, nombre: 'App Mascotas' }
  ]

  const initialState = {
    //paso los valores del proyecto al listadoProyecto
    proyecto : [],
    //cuando el usuario presione para crear un proyecto el state cambia a true (para mostrar el form de NuevoProyecto)
    formulario: false
  }
  //dispatch para ejecutar las acciones
  const [ state, dispatch ] = useReducer(proyectoReducer, initialState)
  //serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }
  //carga los proyectos
  const obtenerProyectos =() => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyecto
    })
  }
  return (

    <proyectoContext.Provider
      value={{
        proyecto: state.proyecto,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos
      }}
    >
      {props.children}
    </proyectoContext.Provider>

  )

}

export default ProyectoState;
