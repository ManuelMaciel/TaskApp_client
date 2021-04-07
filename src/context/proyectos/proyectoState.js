import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid"; 
//importamos el context y el reducer
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
//importamos los types
import { 
          FORMULARIO_PROYECTO, 
          OBTENER_PROYECTOS,
          AGREGAR_PROYECTO,
          VALIDAD_FORMULARIO,
          PROYECTO_ACTUAL,
          ELIMINAR_PROYECTO
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
    formulario: false,
    //muestra un error
    errorformulario: false,
    //State del proyecto actual
    proyectoactual: null
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
  //agregar un proyecto
  const agregarProyecto = proyecto => {
    proyecto.id = uuid();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }
  //muestra un error si el form esta vacio
  const mostrarError = () => {
    dispatch({
      type: VALIDAD_FORMULARIO
    })
  }
  
  //selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoactualId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoactualId
    })
  }
  //elimina un proyecto
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    })
  }

  return (

    <proyectoContext.Provider
      value={{
        proyecto: state.proyecto,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyectoactual: state.proyectoactual,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>

  )

}

export default ProyectoState;
