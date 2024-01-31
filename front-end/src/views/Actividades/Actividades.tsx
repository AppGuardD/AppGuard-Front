import type React from "react"
import { Link } from "react-router-dom"
import { useAppSelector,useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import  { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import CardsActividades from "@/features/Actividades/CardsActividades"


const Actividades: React.FC= () => {
  const actividades: ActividadesTypes[] = useAppSelector(
    state => state.actividadesReducer.actividades,
  )
  const dispatch = useAppDispatch()

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
      <Link to={`/home`}>
        <button> Ir atras </button>
      </Link>
      <CardsActividades actividades={actividades}/>
    </div>
  ) 
}

export default Actividades