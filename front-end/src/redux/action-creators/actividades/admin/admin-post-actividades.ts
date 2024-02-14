import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "@/redux/action-types/actividadesTypes"
import instance from "@/redux/axios/instance"

export function postAdminActividades(options: {
  form: any
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance({
        method: "post",
        url: "/activities/create",
        data: options.form,
        headers: {
          tk: options.token,
        },
      })

      dispatch({
        type: ActionType.POST,
        payload: response.data,
      })
      dispatch({
        type: ActionType.IMAGE,
        payload: "",
      })
    } catch (error: any) {
      console.error("Error creating User:", error.response.data)
    }
  }
}
