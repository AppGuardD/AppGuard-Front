import { ActividadType } from "../action-types/actividadesTypes"
import type { ActividadesTypes, Action } from "../actions/actividadesActions"
import type { DetailType } from "../actions/actividadesActions"

export interface Filters {}

interface InitialState {
  name: string
  type: "" | "Deportivo" | "Sanitario" | "Cultural"
  cost: "" | "Pago" | "Gratis"
  order: "" | "Mayor" | "Menor"
  actividades: ActividadesTypes[]
  actividadesFilter: ActividadesTypes[]
  totalPages: number
  detail: DetailType
}

const initialState: InitialState = {
  name: "",
  type: "",
  cost: "",
  order: "",
  actividades: [],
  actividadesFilter: [],
  totalPages: 0,
  detail: {},
}

const actividadesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActividadType.GET:
      return {
        ...state,
        actividades: [...state.actividades, ...action.payload],
      }

    case ActividadType.CLEAN:
      return { ...state, actividades: action.payload }

    case ActividadType.GET_ID:
      return { ...state, detail: action.payload }

    case ActividadType.FILTER:
      return { ...state, actividades: action.payload }

    case ActividadType.SET_FILTER:
      return { ...state, filters: action.payload }

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
