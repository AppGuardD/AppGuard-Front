import axios from "axios"
import type { Dispatch } from "@reduxjs/toolkit"
import type { Action } from "@/redux/actions/actividadesActions"
import { ActividadType } from "@/redux/action-types/actividadesTypes"

const instance = axios.create({
  //baseURL: "http://localhost:3001/api",
  baseURL: "https://appguard-back.onrender.com/",
})

export function disableActividades(options: { id?: number; token?: string }) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const urlDisable = `/activities/disable/${options.id}`
      const urlReset = `/activities/admin`
      const token = options.token

      await instance({
        method: "put",
        url: urlDisable,
        data: { token: token },
      })

      const response = await instance({
        method: "get",
        url: urlReset,
        data: { token: token },
      })

      dispatch({
        type: ActividadType.DISABLE,
        payload: response.data.requestData,
      })
    } catch (error) {
      console.error("Error al desactivar actividad:", error)
    }
  }
}
