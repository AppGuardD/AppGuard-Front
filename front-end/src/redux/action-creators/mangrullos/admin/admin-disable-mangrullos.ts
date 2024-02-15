import type { Dispatch } from "@reduxjs/toolkit"
import type { Action } from "@/redux/actions/mangrullosActions"
import { ActionType } from "@/redux/action-types/mangrullosTypes"
import instance from "@/redux/axios/instance"

export function disableMangrullos(options: {
  oldUrl: string
  page: number
  id?: number
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      await instance({
        method: "put",
        url: `/mangrullos/disable/${options.id}`,
        headers: {
          tk: options.token,
        },
      })

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
        type: ActionType.DISABLE,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error al desactivar mangrullos:", error)
    }
  }
}
