import { ActionType } from "../../../action-types/userTypes"
import type { Action } from "../../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function rolUserAdmin(options: {
  token: string | null
  userId: string
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      await instance({
        method: "put",
        url: `/user/rol/${options.userId}`,
        headers: { tk: options.token },
      })

      const response = await instance({
        method: "get",
        url: `/user/search`,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.GET_ADMIN,
        payload: response.data,
      })
      dispatch({
        type: ActionType.ROL_EDIT,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
