import { ActionType } from "../../action-types/mangrullosTypes"
import type { Action } from "../../actions/mangrullos/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanMangrullos() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActionType.CLEAN,
      payload: [],
    })
  }
}
