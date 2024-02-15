import type { Action } from "@/redux/actions/mangrullosActions"
import { ActionType } from "@/redux/action-types/mangrullosTypes"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function postAdminMangrullo(options: {
  form: any
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      await instance({
        method: "post",
        url: "/mangrullos/create",
        data: options.form,
        headers: {
          tk: options.token,
        },
      })

      dispatch({
        type: ActionType.POST_ADMIN,
      })
    } catch (error: any) {
      console.error("Error creating User:", error.response.data)
    }
  }
}
