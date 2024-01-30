import axios from "axios"
import { ActionType } from "../../action-types/advicesTypes"
import type { Action } from "../../actions/advicesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getAdvices() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios(`http://localhost:3001/api/advice/search`)
      dispatch({
        type: ActionType.GET,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all mangrullos:", error)
    }
  }
}
