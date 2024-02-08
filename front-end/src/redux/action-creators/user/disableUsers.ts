import { ActionType } from "../../action-types/mangrullosTypes"
import type { Action } from "../../actions/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { cleanUsers } from "./cleanUsers"
import { getUsers } from "./getUsers"
import instance from "@/redux/axios/instance"

export function disableMangrullos(id: number) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance.put(`/mangrullos/deactivate/${id}`)
      cleanUsers()
      getUsers()
      dispatch({
        type: ActionType.DISABLE,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error al desactivar mangrullo:", error)
    }
  }
}
