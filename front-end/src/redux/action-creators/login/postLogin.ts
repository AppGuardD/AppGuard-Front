import { ActionType } from "../../action-types/loginTypes"
import type { Action } from "../../actions/loginActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function postLogin(data: any) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance.post("/auth/login", data)

      const userInfo = response.data.token
      localStorage.setItem("USER_INFO", userInfo)
      console.log("userInfo:", userInfo)

      dispatch({
        type: ActionType.LOGIN,
        payload: userInfo,
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
