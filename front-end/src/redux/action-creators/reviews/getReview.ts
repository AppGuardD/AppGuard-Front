import { ReviewType } from "@/redux/action-types/reviewTypes"
import type { Action } from "@/redux/actions/reviewActions"
import instance from "@/redux/axios/instance"
import type { Dispatch } from "@reduxjs/toolkit"

export function getReviews() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/reviewActivity/search`)
      dispatch({
        type: ReviewType.GET,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all Review:", error)
    }
  }
}
