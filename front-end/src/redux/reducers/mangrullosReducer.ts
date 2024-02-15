import { ActionType } from "@/redux/action-types/mangrullosTypes"
import type {
  DetailMangrulloType,
  Mangrullo,
  Action,
  MangrulloAdmin,
} from "@/redux/actions/mangrullosActions"

interface InitialState {
  mangrullosTable: MangrulloAdmin[]
  totalPagesAdmin: number
  totalItemsAdmin: number
  currentPageAdmin: number
  urlAdmin: string

  totalPages: number
  mangrullos: Mangrullo[]
  detail: DetailMangrulloType
}

const initialState: InitialState = {
  mangrullosTable: [],
  totalPagesAdmin: 0,
  totalItemsAdmin: 0,
  currentPageAdmin: 1,
  urlAdmin: "",

  totalPages: 0,
  mangrullos: [],
  detail: {
    activity: [],
    id: 0,
    dangerousness: 0,
    qualification: 0,
    zone: "",
    state: "",
    image: "",
  },
}

const sort = (mangrullo: MangrulloAdmin[]) => {
  const sorter = mangrullo.sort((a, b) => a?.id - b?.id)
  return sorter
}

const mangrullosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, mangrullos: action.payload }

    case ActionType.GET:
      return { ...state, mangrullos: action.payload }

    case ActionType.GET_ID:
      return {
        ...state,
        detail: action.payload,
      }
    case ActionType.DISABLE:
      return { ...state, mangrullosTable: action.payload }

    case ActionType.GET_ADMIN:
      return {
        ...state,
        urlAdmin: action.url,
        mangrullosTable: sort(action.payload.requestData),
        totalPagesAdmin: action.payload.pagination.totalPages,
        totalItemsAdmin: action.payload.pagination.totalItems,
        currentPageAdmin: action.payload.pagination.currentPage,
      }

    case ActionType.PAGE_ADMIN:
      return {
        ...state,
        mangrullosTable: sort(action.payload.requestData),
        totalPagesAdmin: action.payload.pagination.totalPages,
        totalItemsAdmin: action.payload.pagination.totalItems,
        currentPageAdmin: action.payload.pagination.currentPage,
      }

    case ActionType.CLEAN_ADMIN:
      return { ...state, mangrullosTable: action.payload }

    default:
      return state
  }
}

export default mangrullosReducer
