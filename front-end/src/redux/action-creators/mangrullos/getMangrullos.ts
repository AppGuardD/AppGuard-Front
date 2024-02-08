import instance from "@/redux/axios/instance"
import { ActionType } from "../../action-types/mangrullosTypes"
import type { Action } from "../../actions/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getMangrullos() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/mangrullos/search`)
      dispatch({
        type: ActionType.GET,
        payload: response.data.mangrullos,
      })
    } catch (error) {
      console.error("Error getting all mangrullos:", error)
    }
  }
}
