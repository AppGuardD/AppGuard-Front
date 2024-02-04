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
  totalItems: number
  currentPage: number
  detail: DetailType
}

const initialState: InitialState = {
  actividades: [],
  actividadesCopy: [],
  type: "",
  cost: "",
  order: "",

  totalPages: 0,
  totalItems: 0,
  currentPage: 1,

  detail: {},
}

const actividadesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActividadType.GET:
      return {
        ...state,
        actividades: action.payload.requestData,
        actividadesCopy: action.payload.requestData,
        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
        currentPage: action.payload.pagination.currentPage,
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
