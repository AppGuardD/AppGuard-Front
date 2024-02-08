import { ActionType } from "../../action-types/advicesTypes"
import type { Action } from "../../actions/advicesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getAdvices() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/advice/search`)
      dispatch({
        type: ActionType.GET,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all mangrullos:", error)
    }
  }
}
