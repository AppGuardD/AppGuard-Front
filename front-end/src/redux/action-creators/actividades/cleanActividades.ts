import { ActionType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanActividades() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActionType.CLEAN,
      payload: [],
    })
  }
}
