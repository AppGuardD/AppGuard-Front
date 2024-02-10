import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "@/redux/action-types/actividadesTypes"
import instance from "@/redux/axios/instance"

interface NewActivity {
  activityName: string
  description: string
  image: string
  price: string
  state: string
  type: string
}

export function postAdminActividades(options: { newActivity: NewActivity }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const url = "/activities/create"
      const response = await instance.post(url, options)

      dispatch({
        type: ActionType.POST,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error creating User:", error)
    }
  }
}
