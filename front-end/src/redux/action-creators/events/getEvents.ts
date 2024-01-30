import axios from "axios"
import { EventType } from "../../action-types/eventsTypes"
import type { Action } from "../../actions/eventsActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getEvents() {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios(
        `http://localhost:3001/api/activities/search`,
      )
      console.log(response.data.requestData)

      dispatch({
        type: EventType.GET,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}

