import axios from "axios"
import { ActionType } from "../../action-types/mangrullosTypes"
import type { Action } from "../../actions/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getIdMangrullos(id: number) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios(
        `http://localhost:3001/api/mangrullos/search/${id}`,
      )
      dispatch({
        type: ActionType.GET_ID,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all mangrullos:", error)
    }
  }
}
