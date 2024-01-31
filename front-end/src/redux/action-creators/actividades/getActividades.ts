import axios from "axios"
import { ActividadType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getActividades() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios(
        `http://localhost:3001/api/activities/search`,
      )
      console.log(response.data.requestData)

      dispatch({
        type: ActividadType.GET,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
