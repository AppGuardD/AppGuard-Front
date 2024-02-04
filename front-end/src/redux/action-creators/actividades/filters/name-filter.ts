import { ActividadType } from "@/redux/action-types/actividadesTypes"
import type { Action } from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"

export function searchByNameActividades(query: string) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const response = await axios(
        `http://localhost:3001/api/activities/name/${query}`,
      )
      dispatch({
        type: ActividadType.QUERY_BY_NAME,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error buscando actividades por nombre:", error)
      dispatch({
        type: ActividadType.QUERY_BY_NAME,
        payload: [],
      })
    }
  }
}
