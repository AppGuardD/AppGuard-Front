import axios from "axios"
import { ActionType } from "../../action-types/loginTypes"
import type { Action } from "../../actions/loginActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function postLogin(data: any) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/login",
        data,
      )
      dispatch({
        type: ActionType.POST,
        payload: response.data,
      })
      const userInfo = response.data.token
      localStorage.setItem("USER_INFO", userInfo)
      console.log("userInfo:", userInfo)
    } catch (error) {
      console.error("Error de log:", error)
    }
  }
}
