import { ActionType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getActividades(options?: {
  query?: string
  type?: string
  state?: string
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const queryParams = new URLSearchParams()
      if (options?.query) queryParams.set("query", options.query)
      if (options?.type) queryParams.set("type", options.type)
      if (options?.state) queryParams.set("state", options.state)

      const url = `/activities/search?${queryParams.toString()}`
      const response = await instance.get(url)

      dispatch({
        type: ActionType.GET,
        payload: response.data,
        url: url,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
