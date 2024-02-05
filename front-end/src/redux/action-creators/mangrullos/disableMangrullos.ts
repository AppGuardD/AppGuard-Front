import axios from "axios"
import { ActionType } from "../../action-types/mangrullosTypes"
import type { Action } from "../../actions/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { cleanMangrullos } from "./cleanMangrullos"
import { getMangrullos } from "./getMangrullos"

export function disableMangrullos(id: number) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/mangrullos/disable/${id}`,
      )
      cleanMangrullos()
      getMangrullos()
      dispatch({
        type: ActionType.DISABLE,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error al desactivar mangrullo:", error)
    }
  }
}
