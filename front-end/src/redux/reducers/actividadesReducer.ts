import { ActividadType } from "../action-types/actividadesTypes"
import type { ActividadesTypes, Action } from "../actions/actividadesActions"
import type { DetailType } from "../actions/actividadesActions"

interface InitialState {
  actividades: ActividadesTypes[]
  actividadesCopy: ActividadesTypes[]
  type: "" | "Deportivo" | "Sanitario" | "Cultural"
  cost: "" | "Pago" | "Gratis"
  order: "" | "Mayor" | "Menor"
  totalPages: number
  detail: DetailType
}

const initialState: InitialState = {
  actividades: [],
  actividadesCopy: [],
  type: "",
  cost: "",
  order: "",
  totalPages: 0,
  detail: {},
}

const actividadesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActividadType.GET:
      return {
        ...state,
        actividades: [...state.actividades, ...action.payload],
        actividadesCopy: [...state.actividades, ...action.payload],
      }

    case ActividadType.CLEAN:
      return { ...state, actividades: action.payload }

    case ActividadType.GET_ID:
      return { ...state, detail: action.payload }

    case ActividadType.CLEAN_FILTERS:
      return {
        ...state,
        actividades: state.actividadesCopy,
      }

    case ActividadType.QUERY_BY_NAME:
      return {
        ...state,
        actividades: action.payload,
      }

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
