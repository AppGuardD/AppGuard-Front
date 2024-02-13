import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getCart(options: {
  userId: string | null
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance({
        method: "get",
        url: `/car/getCarrito/${options.userId}`,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.GET_CART,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
