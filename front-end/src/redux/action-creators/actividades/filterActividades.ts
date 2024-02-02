import { ActividadType } from "@/redux/action-types/actividadesTypes"
import type {
  Action,
  ActividadesTypes,
} from "@/redux/actions/actividadesActions"
import type { Filters } from "@/redux/reducers/actividadesReducer"
import type { Dispatch } from "@reduxjs/toolkit"

export function filterActividades(
  actividades: ActividadesTypes[],
  filters: Filters,
) {
  return function (dispatch: Dispatch<Action>) {
    const data = actividades.filter(activity => {
      return (
        activity.activityName.includes(filters.name) &&
        (filters.type === "" || activity.type === filters.type) &&
        (filters.cost === "" || activity.state === filters.cost)
      )
    })

    if (filters.order === "Mayor") {
      data.sort((a, b) => b.price - a.price)
    } else if (filters.order === "Menor") {
      data.sort((a, b) => a.price - b.price)
    }

    dispatch({
      type: ActividadType.FILTER,
      payload: data,
    })
  }
}
