import { ActionType } from "../../../action-types/mangrullosTypes"
import type { Action } from "../../../actions/mangrullosActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanAdminMangrullos() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActionType.CLEAN_ADMIN,
      payload: [],
    })
  }
}
