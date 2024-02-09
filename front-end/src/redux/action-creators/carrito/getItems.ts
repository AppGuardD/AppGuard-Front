import axios from "axios"
import { ActionType } from "../../action-types/cartTypes"
import type { Action } from "../../actions/cartActions"
import type { Dispatch } from "@reduxjs/toolkit"

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
})

export function getCart(userId: number) {
  return async function (dispatch: Dispatch<Action>) {
    try {

      const url = `/car/getCarrito/${userId}`
      const response = await instance.get(url)
      dispatch({
        type: ActionType.GET_CART,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
