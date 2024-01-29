import { ActionType } from "../action-types/mangrullosTypes"
import type { Mangrullo, Action, Detail } from "../actions/mangrullosActions"

interface InitialState {
  totalPages: number
  mangrullos: Mangrullo[]
  detail: Detail | null | undefined
}

const initialState: InitialState = {
  totalPages: 0,
  mangrullos: [],
  detail: null,
}

const mangrullosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, mangrullos: action.payload }

    case ActionType.GET:
      return { ...state, mangrullos: [...state.mangrullos, ...action.payload] }

    case ActionType.GET_ID:
      return {
        ...state,
        detail: action.payload,
      }
    //
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

export default mangrullosReducer
