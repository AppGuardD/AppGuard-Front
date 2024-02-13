import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function removeItem(options: { data: any; token: string | null }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      console.log(options.data)
      const { userId, carritoId, ActivityId } = options.data

      await instance({
        method: "put",
        url: `car/removeItem/?carritoId=${carritoId}&ActivityId=${ActivityId}`,
        headers: { tk: options.token },
      })

      const response = await instance({
        method: "get",
        url: `/car/getCarrito/${userId}`,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.REMOVE_FROM_CART,
        payload: response.data,
      })
    } catch (error: any) {
      console.error("Error al remove actividad del cart:", error.response.data)
    }
  }
}
