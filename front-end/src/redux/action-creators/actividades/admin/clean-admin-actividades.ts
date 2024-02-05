import { ActividadType } from "../../../action-types/actividadesTypes"
import type { Action } from "../../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanAdminActividades() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActividadType.CLEAN_ADMIN,
      payload: [],
    })
  }
}
