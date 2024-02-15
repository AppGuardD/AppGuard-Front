import { ActionType } from "../action-types/actividadesTypes"
import type { Action } from "../actions/actividadesActions"
import type { DetailActTypes } from "../actions/actividadesActions"

interface InitialState {
  type: "" | "Deportivo" | "Sanitario" | "Cultural"
  cost: "" | "Pago" | "Gratis"
  order: "" | "Mayor" | "Menor"

  actividades: DetailActTypes[]
  actividadesCopy: DetailActTypes[]
  totalPages: number
  totalItems: number
  currentPage: number
  url: string

  adminTable: DetailActTypes[]
  totalPagesAdmin: number
  totalItemsAdmin: number
  currentPageAdmin: number
  urlAdmin: string

  detail: DetailActTypes

  image: string
  imageLoading: boolean
}

const initialState: InitialState = {
  type: "",
  cost: "",
  order: "",

  url: "",
  actividades: [],
  actividadesCopy: [],
  totalPages: 0,
  totalItems: 0,
  currentPage: 1,

  urlAdmin: "",
  adminTable: [],
  totalPagesAdmin: 0,
  totalItemsAdmin: 0,
  currentPageAdmin: 1,

  detail: {
    id: 0,
    activityName: "",
    description: "",
    qualification: 0,
    price: 0,
    active: false,
    image: "",
  },

  image: "",
  imageLoading: false,
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

    case ActionType.PAGE:
      return {
        ...state,
        actividades: action.payload.requestData,
        actividadesCopy: action.payload.requestData,
        totalPages: action.payload.pagination.totalPages,
        totalItems: action.payload.pagination.totalItems,
        currentPage: action.payload.pagination.currentPage,
      }

    case ActionType.GET_ADMIN:
      return {
        ...state,
        adminTable: action.payload.requestData,
        urlAdmin: action.url,
        totalPagesAdmin: action.payload.pagination.totalPages,
        totalItemsAdmin: action.payload.pagination.totalItems,
        currentPageAdmin: action.payload.pagination.currentPage,
      }

    case ActionType.PAGE_ADMIN:
      return {
        ...state,
        adminTable: action.payload.requestData,
        totalPagesAdmin: action.payload.pagination.totalPages,
        totalItemsAdmin: action.payload.pagination.totalItems,
        currentPageAdmin: action.payload.pagination.currentPage,
      }

    case ActionType.CLEAN:
      return { ...state, actividades: action.payload }

    case ActionType.GET_ID:
      return { ...state, detail: action.payload }

    case ActionType.DISABLE:
      return { ...state, adminTable: action.payload }

    case ActionType.CLEAN_ADMIN:
      return { ...state, adminTable: action.payload }

    case ActionType.IMAGE:
      return { ...state, image: action.payload }

    case ActionType.IMAGE_LOADING:
      return { ...state, imageLoading: action.payload }

    default:
      return state
  }
}

export default actividadesReducer
