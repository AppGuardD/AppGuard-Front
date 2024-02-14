import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "@/redux/action-types/actividadesTypes"
import instance from "@/redux/axios/instance"

export function putAdminActividades(options: {
  id?: number
  form: any
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance({
        method: "put",
        url: `/activities/update/${options.id}`,
        data: options.form,
        headers: {
          tk: options.token,
        },
      })

      dispatch({
        type: ActionType.PUT,
        payload: response.data,
      })
      dispatch({
        type: ActionType.IMAGE,
        payload: "",
      })
    } catch (error) {
      console.error("Error editing user", error)
    }
  }
}
