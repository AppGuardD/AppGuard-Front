import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import CardsActividades from "@/features/Actividades/CardsActividades"
import type { DetailType } from "@/redux/actions/actividadesActions"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import FilterActividades from "@/features/Actividades/filters/filter-bar"

const Actividades: React.FC = () => {
  const actividades: DetailType[] = useAppSelector(
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
    <div className="h-full">
      <FilterActividades />
      <CardsActividades actividades={actividades} />
    </div>
  )
}

export default Actividades
