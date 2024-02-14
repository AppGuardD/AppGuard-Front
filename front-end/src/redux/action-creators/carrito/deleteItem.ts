import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"
import { ActionType } from "@/redux/action-types/cartTypes"

export function deleteItem(options: { data: any; token: string | null }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const { userId, ActivityId } = options.data

      await instance({
        method: "delete",
        url: `car/deleteItem/?userId=${userId}&ActivityId=${ActivityId}`,
        headers: { tk: options.token },
      })

      const response = await instance({
        method: "get",
        url: `/car/getCarrito/${userId}`,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.DELETE_ITEM,
        payload: response.data,
      })
    } catch (error: any) {
      console.error(
        "Error al elimiar actividad del carrito",
        error.response.data,
      )
    }
  }
}
