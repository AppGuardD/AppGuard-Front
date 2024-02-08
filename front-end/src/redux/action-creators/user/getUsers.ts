import instance from "@/redux/axios/instance"
import { ActionType } from "../../action-types/userTypes"
import type { Action } from "../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getUsers() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/user/search`)
      dispatch({
        type: ActionType.GET,
        payload: response.data.user,
      })
    } catch (error) {
      console.error("Error getting all users:", error)
    }
  }
}
