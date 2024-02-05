import { ActionType } from "@/redux/action-types/userTypes"
import type { Action, UserTypes } from "@/redux/actions/userActions"

interface InitialState {
  user: UserTypes[]
  detail?: UserTypes // Puede ser opcional dependiendo de tu lógica
  token?: string
}

const initialState: InitialState = {
  user: [],
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2wiOiJBZG1pbiIsImlhdCI6MTcwNzEwOTcxMiwiZXhwIjoxNzA3Mjg5NzEyfQ.rMoJpD9gnvWwLcH6ObOOTOmUGsvc6nrjMEvs3Rtatqs",
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, user: action.payload }

    case ActionType.GET:
      return { ...state, user: [...state.user, ...action.payload] }

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
        user: [...state.user, action.payload],
      }

    //  case ActionType.PUT:
    //    return (state = action.payload)
    // //

    default:
      return state
  }
}

export default userReducer
