import { ActionType } from "../../../action-types/userTypes"
import type { Action } from "../../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getAdminUsers(options: { token: string | null }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const url = `/user/search`
      const response = await instance({
        method: "get",
        url: url,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.GET_ADMIN,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
