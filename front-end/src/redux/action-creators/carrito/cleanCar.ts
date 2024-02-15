import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"
import { ActionType } from "@/redux/action-types/cartTypes"

export function successCart(options: {
  userId: string | null
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      await instance({
        method: "delete",
        url: `car/deleteAll?userId=${options.userId}`,
        headers: { tk: options.token },
      })
      dispatch({
        type: ActionType.SUCCESS_CART,
      })
    } catch (error: any) {
      console.error(
        "Error al elimiar actividad del carrito",
        error.response.data,
      )
    }
  }
}
