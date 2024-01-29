import { ActionType } from "@/redux/action-types/mangrullosTypes"
import type {
  DetailType,
  Mangrullo,
  Action,
} from "@/redux/actions/mangrullos/mangrullosActions"

interface InitialState {
  totalPages: number
  mangrullos: Mangrullo[]
  detail: DetailType
}

const initialState: InitialState = {
  totalPages: 0,
  mangrullos: [],
  detail: {},
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
