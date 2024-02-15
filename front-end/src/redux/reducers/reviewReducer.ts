import { ReviewType } from "@/redux/action-types/reviewTypes"
import type { Action } from "@/redux/actions/reviewActions"

export interface ReviewReducer {
  id: number
  qualification: number
  state: string
  comment: string
  activityId: number
  userId: number
}

interface InitialState {
  review: ReviewReducer[]
  comment: string
  qualification: number
}

const initialState: InitialState = {
  review: [],
  comment: "",
  qualification: 0,
}

const reviewReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ReviewType.GET:
      return {
        ...state,
        review: action.payload,
      }

    case ReviewType.POST:
      return {
        ...state,
        reviewPost: [...state.comment, state.qualification, action.payload],
      }

    case ReviewType.DELETE:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default reviewReducer
