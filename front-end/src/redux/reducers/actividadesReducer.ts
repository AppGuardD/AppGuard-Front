import { ActionType } from "../action-types/actividadesTypes"
import type { ActividadesTypes, Action } from "../actions/actividadesActions"
import type { DetailType } from "../actions/actividadesActions"

interface InitialState {
  adminTable: ActividadesTypes[]
  actividades: ActividadesTypes[]
  actividadesCopy: ActividadesTypes[]
  type: "" | "Deportivo" | "Sanitario" | "Cultural"
  cost: "" | "Pago" | "Gratis"
  order: "" | "Mayor" | "Menor"
  totalPages: number
  totalItems: number
  currentPage: number
  detail: DetailType
  url: string
}

const initialState: InitialState = {
  adminTable: [],
  actividades: [],
  actividadesCopy: [],
  type: "",
  cost: "",
  order: "",
  totalPages: 0,
  totalItems: 0,
  currentPage: 1,
  detail: {},
  url: "",
}

const actividadesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET:
      return {
        ...state,
        actividades: action.payload.requestData,
        actividadesCopy: action.payload.requestData,
        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
        currentPage: action.payload.pagination.currentPage,
        url: action.url,
      }

    case ActionType.CLEAN:
      return { ...state, actividades: action.payload }

    case ActionType.GET_ID:
      return { ...state, detail: action.payload }

    case ActionType.PAGE:
      return {
        ...state,
        actividades: action.payload.requestData,
        actividadesCopy: action.payload.requestData,
        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
        currentPage: action.payload.pagination.currentPage,
      }

    case ActionType.DISABLE:
      return { ...state, adminTable: action.payload }

    case ActionType.GET_ADMIN:
      return { ...state, adminTable: action.payload }

    case ActionType.CLEAN_ADMIN:
      return { ...state, adminTable: action.payload }

    default:
      return state
  }
}

export default actividadesReducer
