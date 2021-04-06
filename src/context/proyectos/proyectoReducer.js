//importamos los types
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types'
//va a tomar un state y un action
export default (state, action) => {
  switch(action.type){
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyecto: action.payload
      }
    //va a retornar un state
    default:
      return state;
  }
}