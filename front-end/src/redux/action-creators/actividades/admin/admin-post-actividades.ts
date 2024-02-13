import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "@/redux/action-types/actividadesTypes"
import instance from "@/redux/axios/instance"

export function postAdminActividades(options: {
  image: any
  form: any
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const formData = new FormData()
      formData.append("image", options.image)

      const response = await instance({
        method: "post",
        url: "/activities/create",
        data: { form: options.form, image: formData },
        headers: {
          tk: options.token,
          "Content-Type": "multipart/form-data",
        },
      })

      dispatch({
        type: ActionType.POST,
        payload: response.data,
      })
    } catch (error: any) {
      console.error("Error creating User:", error.response.data)
    }
  }
}
