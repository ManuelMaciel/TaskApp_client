//importamos los types
import { FORMULARIO_PROYECTO } from '../../types'
//va a tomar un state y un action
export default (state, action) => {
  switch(action.type){
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true
      }
    //va a retornar un state
    default:
      return state;
  }
}