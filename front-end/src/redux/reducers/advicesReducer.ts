import { ActionType } from "../action-types/advicesTypes"
import type { Action, AdvicesType } from "../actions/advicesActions"

interface InitialState {
  advices: AdvicesType[]
}

const initialState: InitialState = {
  advices: [],
}

const advicesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET:
      return { ...state, advices: [...state.advices, ...action.payload] }

    case ActionType.CLEAN:
      return { ...state, advices: action.payload }

    default:
      return state
  }
}

export default advicesReducer
