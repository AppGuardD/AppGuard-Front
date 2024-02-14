import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "@/redux/action-types/actividadesTypes"
import instance from "@/redux/axios/instance"

export function uploadImageActivity(options: { image: any }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance({
        method: "post",
        url: "/image/upload",
        data: { image: options.image },
        headers: {
          //tk: options.token,
          "Content-Type": "multipart/form-data",
        },
      })
      dispatch({
        type: ActionType.IMAGE,
        payload: response.data,
      })
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
}
