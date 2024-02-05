import { ActionType } from "../../action-types/userTypes"
import type { Action } from "../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanUsers() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActionType.CLEAN,
      payload: [],
    })
  }
}
