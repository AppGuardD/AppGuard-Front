import { ActividadType } from "../../../action-types/actividadesTypes"
import type { Action } from "../../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function getAdminActividades(options: {
  //page?: number
  //query?: string
  //type?: string
  //state?: string
  token?: string
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      //const queryParams = new URLSearchParams()
      //if (options?.page) queryParams.set("page", options.page.toString())
      //if (options?.query) queryParams.set("query", options.query)
      //if (options?.type) queryParams.set("type", options.type)
      //if (options?.state) queryParams.set("state", options.state)
      const token = options.token

      const url = `/activities/admin`
      const response = await instance({
        method: "get",
        url: url,
        data: { token: token },
      })

      dispatch({
        type: ActividadType.GET_ADMIN,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
