import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import CardsActividades from "@/features/Actividades/CardsActividades"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import FilterActividades from "@/features/Actividades/filters/filter-bar"

const Actividades: React.FC = () => {
  const actividades: ActividadesTypes[] = useAppSelector(
    state => state.actividadesReducer.actividades,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      try {
        await dispatch(getActividades())
      } finally {
        if (!mounted) {
          dispatch(cleanActividades())
        }
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])

  return (
    <>
      <FilterActividades />
      <CardsActividades actividades={actividades} />
    </>
  )
}

export default Actividades
