import axios from "axios"
import { ActionType } from "../../action-types/mangrullosTypes"
import type { Action } from "../../actions/mangrullos/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getMangrullos() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios(
        `http://localhost:3001/api/mangrullos/search`,
      )
      dispatch({
        type: ActionType.GET,
        payload: response.data.mangrullos,
      })
    } catch (error) {
      console.error("Error getting all mangrullos:", error)
    }
  }
}
