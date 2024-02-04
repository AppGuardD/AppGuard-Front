import type React from "react"
import type { DetailType } from "@/redux/actions/actividadesActions"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getIdActividad } from "@/redux/action-creators/actividades/getIdActividad"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

const DetailActividades: React.FC = () => {
  const detail: DetailType = useAppSelector(
    state => state.actividadesReducer.detail,
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    try {
      dispatch(getIdActividad(Number(id)))
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }, [dispatch, id])

  return (
    <div>
      <div className="flex justify-between px-8">
        <p className="text-3xl align-baseline">Detalle de actividad</p>
        <Button
          onClick={() => navigate("/actividades")}
          className="rounded mb-4 border-primary"
          variant={"outline"}
        >
          Ir Atras
        </Button>
      </div>
      {detail ? (
        <div>
          <p className="text-2xl bold capitalize">{detail.activityName}</p>
          <p>Peligrosidad: {detail.description}</p>
          <p>Calificación: {detail.qualification}</p>
          <p>Estado: {detail.state}</p>
          <img className="size-44" src={detail.image} alt="Imagen de playa" />
        </div>
      ) : null}
    </div>
  )
}

export default DetailActividades
