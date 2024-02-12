import instance from "@/redux/axios/instance"
import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function addCart(options: { data: any; token: string | null }) {
  console.log("Datos enviados:", options.data)
  return async function (dispatch: Dispatch<Action>) {
    try {
      const { userId } = options.data
      const urlGet = `/car/getCarrito/${userId}`
      const response = await instance.get(urlGet)

      await instance.post("/car/addItem", options.data, {
        headers: { tk: options.token },
      })

      const carritoID = response.data.id

      localStorage.setItem("ID_CARRITO", carritoID)

      dispatch({
        type: ActionType.ADD_TO_CART,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error de log:", error)
    }
  }
}
