import { ReviewType } from "../action-types/reviewTypes"

export interface ReviewTypes { 
    comment: string,
    qualification: number
}

interface getAction {
  type: ReviewType.GET
  payload: ReviewTypes[]
}

interface postAction {
  type: ReviewType.POST
  payload: ReviewTypes 
}

interface deleteAction {
  type: ReviewType.DELETE
}

export type Action =
  | getAction
  | postAction
  | deleteAction