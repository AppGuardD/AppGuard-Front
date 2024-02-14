import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ActionType } from "@/redux/action-types/actividadesTypes"

export function loadingImage(boolean: boolean) {
  return async function (dispatch: Dispatch<Action>) {
    if (boolean) {
      dispatch({
        type: ActionType.IMAGE_LOADING,
        payload: true,
      })
    } else {
      dispatch({
        type: ActionType.IMAGE_LOADING,
        payload: false,
      })
    }
  }
}
