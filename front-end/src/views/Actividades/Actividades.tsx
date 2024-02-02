import type React from "react"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import CardsActividades from "@/features/Actividades/CardsActividades"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Actividades: React.FC = () => {
  const actividades: ActividadesTypes[] = useAppSelector(
    state => state.actividadesReducer.actividades,
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getActividades())
      if (!mounted) {
        dispatch(cleanActividades())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])
  return (
    <div>
      <div className="flex justify-between px-8 ">
        <p className="text-3xl align-baseline">Todas las Actividades</p>
        <Button
          onClick={() => navigate("/home")}
          className="rounded mb-4 border-primary"
          variant={"outline"}
        >
          Ir Atras
        </Button>
      </div>
      <CardsActividades actividades={actividades} />
    </div>
  )
}

export default Actividades
