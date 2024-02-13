import instance from "@/redux/axios/instance"
import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function paymentCart(options: {
  carrito: any
  id: any
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const userId = options.id
      const arrayItemsPay = options.carrito

      const paymentData = {
        userId: userId,
        arrayItemsPay,
      }

      console.log(JSON.stringify(paymentData))

      const response = await instance({
        method: "post",
        url: `paymentActivities/payment`,
        data: paymentData,
        headers: { tk: options.token },
      })

      console.log(response.data)

      window.open(response.data, "_blank")

      dispatch({
        type: ActionType.PAYMENT,
        payload: response.data,
      })
    } catch (error: any) {
      console.error("Error al pagar:", error.response.data)
    }
  }
}
