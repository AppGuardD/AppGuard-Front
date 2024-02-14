import { ActionType } from "../../action-types/loginTypes"
import type { Action } from "../../actions/loginActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function postLogin(data: any) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance.post("/auth/login", data)

      const token = response.data.token
      localStorage.setItem("TOKEN", token)
      const userId = response.data.logUser.id
      localStorage.setItem("USERID", userId)

      dispatch({
        type: ActionType.LOGIN,
        payload: token,
      })
      dispatch({
        type: ActionType.LOGIN_ERROR,
        payload: "",
      })
    } catch (error: any) {
      console.error("Error de log:", error)
      const message: string = error.response.data.message

      dispatch({
        type: ActionType.LOGIN_ERROR,
        payload: message,
      })
    }
  }
}
