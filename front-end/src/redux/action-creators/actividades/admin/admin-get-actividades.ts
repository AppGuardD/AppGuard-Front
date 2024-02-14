import { ActionType } from "../../../action-types/actividadesTypes"
import type { Action } from "../../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getAdminActividades(options: {
  page?: number
  //query?: string
  //type?: string
  //state?: string
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const queryParams = new URLSearchParams()
      if (options?.page) queryParams.set("page", options.page.toString())
      //if (options?.query) queryParams.set("query", options.query)
      //if (options?.type) queryParams.set("type", options.type)
      //if (options?.state) queryParams.set("state", options.state)

      const url = `/activities/admin?`
      const response = await instance({
        method: "get",
        url: url,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.GET_ADMIN,
        payload: response.data,
        url: url,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
