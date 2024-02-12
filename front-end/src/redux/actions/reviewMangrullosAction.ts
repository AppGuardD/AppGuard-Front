import type { ReviewMangrullosType } from "../action-types/reviewMangrullosTypes"

export interface ReviewMangrullosTypes {
  comment: string
  qualification: number
}

interface getReviewsMangrullo {
  type: ReviewMangrullosType.GET
  payload: ReviewMangrullosTypes[]
}

interface postAction {
  type: ReviewMangrullosType.POST
  payload: ReviewMangrullosTypes
}

export type Action = getReviewsMangrullo | postAction
