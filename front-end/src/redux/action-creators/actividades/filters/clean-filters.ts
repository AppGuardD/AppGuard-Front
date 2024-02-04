import { ActividadType } from "@/redux/action-types/actividadesTypes"
import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function cleanFilterActividades() {
  return function (dispatch: Dispatch<Action>) {
    dispatch({
      type: ActividadType.CLEAN_FILTERS,
      payload: [],
    })
  }
}
