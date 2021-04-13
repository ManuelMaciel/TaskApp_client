import React, { useReducer } from 'react';
import {v4 as uuid} from "uuid"; 
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { 
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA
} from '../../types';


const TareaState = props => {
  const initialState = {
    tarea: [
      {id: 0, nombre: 'Crear la Base de Datos 1', estado: true, proyectoId: 1},
      {id: 1, nombre: 'Seleccionar el Hosting 2', estado: false, proyectoId: 2},
      {id: 2, nombre: 'Hacer el Front 3', estado: true, proyectoId: 3},
      {id: 3, nombre: 'Hacer el Back 4', estado: false, proyectoId: 4},
      {id: 4, nombre: 'Crear la Base de Datos 4', estado: true, proyectoId: 4},
      {id: 5, nombre: 'Seleccionar el Hosting 3', estado: false, proyectoId: 3},
      {id: 6, nombre: 'Hacer el Front 2', estado: true, proyectoId: 2},
      {id: 7, nombre: 'Hacer el Back 1', estado: false, proyectoId: 1},
      {id: 8, nombre: 'Crear la Base de Datos 2', estado: true, proyectoId: 2},
      {id: 9, nombre: 'Seleccionar el Hosting 3', estado: false, proyectoId: 3},
      {id: 10, nombre: 'Hacer el Front 4', estado: true, proyectoId: 4},
      {id: 11, nombre: 'Hacer el Back 1', estado: false, proyectoId: 1},
      {id: 12, nombre: 'Crear la Base de Datos 3', estado: true, proyectoId: 3},
      {id: 13, nombre: 'Seleccionar el Hosting 4', estado: false, proyectoId: 4},
      {id: 14, nombre: 'Hacer el Front 1', estado: true, proyectoId: 1},
      {id: 15, nombre: 'Hacer el Back 2', estado: false, proyectoId: 2}
    ],
    tareaproyecto: null,
    errortarea: false,
    tareaseleccionada: null
  }
  //crear el dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);
  //crear las funciones

  //obtener tareas de un id
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }
  //Agregar una tarea al proyecto seleccionado
  const agregarTarea = tareas => {
    tareas.id = uuid();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tareas
    })
  }
  //valida y muestra un error en caso que sea necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }
  //elimina una tarea
  const eliminarTarea = id => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id
    })
  }
  //cambia el estado de cada tarea
  const cambiarEstadoTarea = tareas => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tareas
    })
  }
  //extrae una tarea para su edicion
  const guardarTareaActual = tarea => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea
    })
  }

  //actualiza una tarea
  const actualizarTarea = tareas => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tareas
    })
  }
  //limpia el formulario de la tarea seleccionada una vez se actualice
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    })
  }
  return (
    <TareaContext.Provider
      value={{
        tarea: state.tarea,
        tareaproyecto: state.tareaproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )

}


export default TareaState;