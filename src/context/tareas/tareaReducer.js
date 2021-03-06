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

export default (state, action) => {
  switch(action.type){
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareaproyecto: state.tarea.filter(tareas => tareas.proyectoId === action.payload)
      }
    case AGREGAR_TAREA:
      return {
        ...state,
        tarea: [...state.tarea, action.payload],
        errortarea: false
      }
    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true
      }
    case ELIMINAR_TAREA:
      return {
        ...state,
        tarea: state.tarea.filter( tarea => tarea.id !== action.payload)
      }
    case ESTADO_TAREA:
      return {
        ...state,
        tarea: state.tarea.map( tarea => tarea.id === action.payload.id ? action.payload : tarea)
      }
    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload
      }
    case ACTUALIZAR_TAREA:
      return {
        ...state,
        tarea: state.tarea.map( tarea => tarea.id === action.payload.id ? action.payload : tarea)
      }
    case LIMPIAR_TAREA:
      return {
        ...state,
        tareaseleccionada: null
      }
    
    default:
      return state;
  }
}