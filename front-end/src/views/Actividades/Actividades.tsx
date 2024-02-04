import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import CardsActividades from "@/features/Actividades/CardsActividades"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import FilterActividades from "@/features/Actividades/filters/filter-bar"

const Actividades: React.FC = () => {
  const actividades: ActividadesTypes[] = useAppSelector(
    state => state.actividadesReducer.actividades,
  )

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
    <div>
      <div className="flex px-8 pb-6 ">
        <div className="basis-1/3 flex">
          <Button
            onClick={() => navigate("/home")}
            className="mr-4"
            variant={"outline"}
          >
            Atras
          </Button>
          <p className="text-3xl">Todas las Actividades</p>
        </div>
        <div className="basis-2/3">
          <FilterActividades />
        </div>
      </div>
      <CardsActividades actividades={actividades} />
    </div>
  )
}

export default Actividades
