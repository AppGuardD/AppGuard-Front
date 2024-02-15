import type { ReviewType } from "../action-types/reviewTypes"
import type { ReviewReducer } from "../reducers/reviewReducer"

interface PostTypes {
  comment: string
  qualification: number
}

interface getAction {
  type: ReviewType.GET
  payload: ReviewReducer[]
}

interface postAction {
  type: ReviewType.POST
  payload: PostTypes
}

interface deleteAction {
  type: ReviewType.DELETE
}

export type Action = getAction | postAction | deleteAction
