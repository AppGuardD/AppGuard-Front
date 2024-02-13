import instance from "@/redux/axios/instance"
import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function addCart(options: { data: any; token: string | null }) {
  console.log("Datos enviados:", options.data)
  return async function (dispatch: Dispatch<Action>) {
    try {
      const { userId } = options.data

      await instance({
        method: "post",
        url: `car/addItem`,
        headers: { tk: options.token },
        data: options.data,
      })

      const response = await instance({
        method: "get",
        url: `/car/getCarrito/${userId}`,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.ADD_TO_CART,
        payload: response.data,
      })
    } catch (error: any) {
      console.error("Error al aniadir al carrito:", error.response.data)
    }
  }
}
