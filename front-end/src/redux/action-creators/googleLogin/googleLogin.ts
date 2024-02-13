import { ActionType } from "../../action-types/loginTypes"
import type { Action } from "../../actions/loginActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function googleLogin() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance.get("/authgoogle/google")
      dispatch({
        type: ActionType.GET,
        payload: response.data.Objecto.token,
      })
      const token = response.data.Objecto.token
      localStorage.setItem("USER_INFO", token)
      console.log("Token de Google:", token)
    } catch (error) {
      console.error("Error en el login de Google:", error)
      // Puedes dispatch un action de error si lo deseas
    }
  }
}