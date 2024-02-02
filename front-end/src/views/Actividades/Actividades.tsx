import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import CardsActividades from "@/features/Actividades/CardsActividades"
import FilterBar from "@/features/Navigation/FilterBar"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"

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
      <div className="flex justify-between px-8 pb-6 ">
        <p className="basis-1/3 text-3xl align-baseline">
          Todas las Actividades
        </p>
        <div className="basis-1/3">
          <FilterBar />
        </div>
        <div className="basis-1/3 flex flex-row-reverse">
          <Button
            onClick={() => navigate("/home")}
            className="ml-4 rounded border-primary"
            variant={"outline"}
          >
            Atras
          </Button>
        </div>
      </div>
      <CardsActividades actividades={actividades} />
    </div>
  )
}

export default Actividades
