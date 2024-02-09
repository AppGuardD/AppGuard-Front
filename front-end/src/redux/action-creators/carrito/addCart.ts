import axios from "axios"
import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function addCart(data: any) {
  console.log("Datos enviados:", data) // Agrega este console.log
  return async function (dispatch: Dispatch<Action>) {
    try {
      const { userId } = data
      await axios.post("http://localhost:3001/car/addItem", data)
      const url = `/car/getCarrito/${userId}`
      const response = await instance.get(url)
      dispatch({
        type: ActionType.ADD_TO_CART,
        payload: response.data,
      })
      const carritoID = response.data.id
      localStorage.setItem("ID_CARRITO", carritoID)
    } catch (error) {
      console.error("Error de log:", error)
    }
  }
}
