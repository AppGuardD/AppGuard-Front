import axios from "axios"
import { ActividadType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
})

export function getActividades(options?: {
  query?: string
  type?: string
  page?: number
  state?: string
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const queryParams = new URLSearchParams()
      if (options?.page) queryParams.set("page", options.page.toString())
      if (options?.query) queryParams.set("query", options.query)
      if (options?.type) queryParams.set("type", options.type)
      if (options?.state) queryParams.set("state", options.state)

      const response = await instance.get(
        `/activities/search?${queryParams.toString()}`,
      )

      dispatch({
        type: ActividadType.GET,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
