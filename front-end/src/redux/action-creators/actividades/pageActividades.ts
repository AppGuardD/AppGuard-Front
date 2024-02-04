import axios from "axios"
import { ActividadType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
})

export function pageActividades(options: { oldUrl: string; page: number }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const oldUrl = options.oldUrl
      const queryParams = new URLSearchParams()
      if (options.page) queryParams.set("page", options.page.toString())

      const url = `${oldUrl}&${queryParams.toString()}`
      const response = await instance.get(url)

      dispatch({
        type: ActividadType.PAGE,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
