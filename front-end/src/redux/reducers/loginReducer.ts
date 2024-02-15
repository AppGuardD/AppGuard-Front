import { ActionType } from "@/redux/action-types/loginTypes"
import type { Action } from "@/redux/actions/loginActions"

interface InitialState {
  email: string
  password: string
  token: string
  errorLogin: string | null
}

const initialState: InitialState = {
  email: "",
  password: "",
  token: "",
  errorLogin: null,
}

const loginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        ...state,
        //user: [...state.email, action.payload],
        token: action.payload,
      }

    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        errorLogin: action.payload,
      }

    default:
      return state
  }
}

export default loginReducer
