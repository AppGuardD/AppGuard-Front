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
        type: ActionType.POST,
        payload: userInfo,
      })
    } catch (error) {
      console.error("Error de log:", error)
    }
  }
}
