import axios from "axios";
import { ActionType } from "../../action-types/cartTypes";
import type { Action } from "../../actions/cartActions";
import type { Dispatch } from "@reduxjs/toolkit";


const instance = axios.create({
  baseURL: "http://localhost:3001/api",
})

export function removeItem(data: any) {
  console.log("Datos enviados:", data); // Agrega este console.log
  return async function (dispatch: Dispatch<Action>) {
    try {
      const { userId, carritoId, ActivityId} = data
      await axios.put(`http://localhost:3001/car/removeItem/?carritoId=${carritoId}&ActivityId=${ActivityId}`);
      const url = `/car/getCarrito/${userId}`
      const response = await instance.get(url)
      dispatch({
        type: ActionType.REMOVE_FROM_CART,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error de log:", error);
    }
  };
}