import { ReviewMangrullosType } from "../action-types/reviewMangrullosTypes"
import type { Action } from "@/redux/actions/reviewMangrullosAction"

interface InitialState {
  comment: string
  qualification: number
}

const initialState: InitialState = {
  comment: "",
  qualification: 0,
}

const reviewMangrullosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ReviewMangrullosType.GET:
      return {
        ...state,
        review: [...state.comment, state.qualification, ...action.payload],
      }

    case ReviewMangrullosType.POST:
      return {
        ...state,
        review: [...state.comment, state.qualification, action.payload],
      }

    default:
      return state
  }
}

export default reviewMangrullosReducer
