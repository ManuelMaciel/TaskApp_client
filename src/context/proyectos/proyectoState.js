import React, { useReducer } from 'react';
//importamos el context y el reducer
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
//importamos los types
import { FORMULARIO_PROYECTO } from '../../types'

const ProyectoState = props => {
  const initialState = {
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

  return (

    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        mostrarFormulario
      }}
    >
      {props.children}
    </proyectoContext.Provider>

  )

}

export default ProyectoState;
