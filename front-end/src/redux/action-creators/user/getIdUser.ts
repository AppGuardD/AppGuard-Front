import instance from "@/redux/axios/instance"
import { ActionType } from "../../action-types/userTypes"
import type { Action } from "../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getIdUser(id: number) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/user/search/${id}`)
      dispatch({
        type: ActionType.GET_ID,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting this user:", error)
    }
  }
}
