import { ActionType } from "@/redux/action-types/loginTypes"
import type { Action } from "@/redux/actions/loginActions"

interface InitialState {
  email: string
  password: string
}

const initialState: InitialState = {
  email: "",
  password: "",
}

const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, user: action.payload }

    case ActionType.GET:
      return { ...state, user: [...state.email, ...action.payload] }

    case ActionType.GET_ID:
      return {
        ...state,
        detail: action.payload,
      }

    case ActionType.DISABLE:
      return { ...state }

    case ActionType.POST:
      return {
        ...state,
        user: [...state.email, action.payload],
      }

    //  case ActionType.PUT:
    //    return (state = action.payload)
    // //

    default:
      return state
  }
}

export default loginReducer
