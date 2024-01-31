import { ActividadType } from "../action-types/actividadesTypes"
import type { ActividadesTypes, Action } from "../actions/actividadesActions"
import type { DetailType } from "../actions/actividadesActions"

interface InitialState {
 totalPages: number
 actividades: ActividadesTypes[]
 detail: DetailType
}

const initialState: InitialState = {
 totalPages: 0,
 actividades: [],
 detail: {} 
}

const actividadesReducer = (state = initialState, action: Action) => {
 switch (action.type) {
   case ActividadType.GET:
     return { ...state, actividades: [...state.actividades, ...action.payload] }

   case ActividadType.CLEAN:
     return { ...state, actividades: action.payload }

   case ActividadType.GET_ID:
    return { ...state, detail: action.payload }
   
   // case ActionType.POST:
   //   return (state = action.payload)
   //
   // case ActionType.PUT:
   //   return (state = action.payload)
   //
   // case ActionType.DISABLE:
   //   return (state = action.payload)

   default:
     return state
 }
}

export default actividadesReducer
