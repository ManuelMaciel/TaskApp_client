//importamos los types
import { 
  FORMULARIO_PROYECTO, 
  OBTENER_PROYECTOS, 
  AGREGAR_PROYECTO ,
  VALIDAD_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from '../../types'
//va a tomar un state y un action
export default (state, action) => {
  switch(action.type){
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      }
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyecto: action.payload
      }
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyecto: [
          ...state.proyecto, action.payload
        ],
        formulario: false,
        errorformulario: false
      }
    case VALIDAD_FORMULARIO:
      return {
        ...state,
        errorformulario: true
      }
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyectoactual: state.proyecto.filter( proyectoactual => proyectoactual.id === action.payload )
      }
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyecto: state.proyecto.filter( proyectoactual => proyectoactual.id !== action.payload ),
        proyectoactual: null
      }
    //va a retornar un state
    default:
      return state;
  }
}