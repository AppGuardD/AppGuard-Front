import { ActionType } from "../../action-types/advicesTypes"
import type { Action } from "../../actions/advicesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanAdvices() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActionType.CLEAN,
      payload: [],
    })
  }
}
