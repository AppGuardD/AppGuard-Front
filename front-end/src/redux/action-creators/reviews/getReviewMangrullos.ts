import { ReviewMangrullosType } from "@/redux/action-types/reviewMangrullosTypes"
import type { Action } from "@/redux/actions/reviewMangrullosAction"
import instance from "@/redux/axios/instance"
import type { Dispatch } from "@reduxjs/toolkit"

export function getReviewsMangrullo() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/reviewMangrullos/search`)
      dispatch({
        type: ReviewMangrullosType.GET,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all Review:", error)
    }
  }
}