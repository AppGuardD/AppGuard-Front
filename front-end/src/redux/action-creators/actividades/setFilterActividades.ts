import { ActividadType } from "@/redux/action-types/actividadesTypes"
import type {
  Action,
  Cost,
  Name,
  Order,
  Type,
} from "@/redux/actions/actividadesActions"
import type { Dispatch } from "@reduxjs/toolkit"

export function setFilterActividades(
  name: Name,
  type: Type,
  cost: Cost,
  order: Order,
) {
  return function (dispatch: Dispatch<Action>) {
    const data = { name, type, cost, order }
    dispatch({
      type: ActividadType.SET_FILTER,
      payload: data,
    })
  }
}
