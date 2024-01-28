import { ActionType } from "../action-types/mangrullosTypes"
import type { Mangrullo, Action } from "../actions/mangrullosActions"

const initialState: Mangrullo[] = []

const mangrullosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return (state = action.payload)

    case ActionType.GET:
      return [...state, ...action.payload]

    // case ActionType.GET_ID:
    //   return state + action.payload
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
