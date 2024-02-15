import type { Action } from "@/redux/actions/mangrullosActions"
import { ActionType } from "@/redux/action-types/mangrullosTypes"
import type { Dispatch } from "@reduxjs/toolkit"
import instance from "@/redux/axios/instance"

export function putAdminMangrullos(options: {
  id?: number
  form: any
  token: string | null
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance({
        method: "put",
        url: `/mangrullos/update/${options.id}`,
        data: options.form,
        headers: {
          tk: options.token,
        },
      })

      dispatch({
        type: ActionType.PUT,
        payload: response.data,
      })
      //dispatch({
      //  type: ActionType.IMAGE,
      //  payload: "",
      //})
    } catch (error) {
      console.error("Error editing mangrullo", error)
    }
  }
}
