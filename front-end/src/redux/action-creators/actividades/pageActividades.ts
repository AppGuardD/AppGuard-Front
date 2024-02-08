import instance from "@/redux/axios/instance"
import { ActividadType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

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
