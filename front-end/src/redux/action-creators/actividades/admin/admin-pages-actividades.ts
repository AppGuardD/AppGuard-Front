import instance from "@/redux/axios/instance"
import { ActionType } from "../../../action-types/actividadesTypes"
import type { Action } from "../../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function pageActAdmin(options: {
  oldUrl: string
  page: number
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const oldUrl = options.oldUrl
      const queryParams = new URLSearchParams()
      if (options.page) queryParams.set("page", options.page.toString())

      const url = `${oldUrl}&${queryParams.toString()}`

      const response = await instance({
        method: "get",
        url: url,
        headers: { tk: options.token },
      })

      dispatch({
        type: ActionType.PAGE_ADMIN,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error getting all events:", error)
    }
  }
}
