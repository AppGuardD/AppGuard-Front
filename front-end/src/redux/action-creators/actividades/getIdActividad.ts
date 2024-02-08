import instance from "@/redux/axios/instance"
import { ActividadType } from "../../action-types/actividadesTypes"
import type { Action } from "../../actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function getIdActividad(id: string | undefined) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await instance(`/activities/search/${id}`)
      dispatch({
        type: ActividadType.GET_ID,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("error getting all mangrullos:", error)
    }
  }
}
