import { ActionType } from "../../../action-types/userTypes"
import type { Action } from "../../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getOrdersAdmin(options: { token: string | null }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const url = `/paymentActivities/Orders`
      const response = await instance({
        method: "get",
        url: url,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.GET_ORDERS,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
