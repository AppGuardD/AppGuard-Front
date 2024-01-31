import type React from "react"
import type { DetailType } from "@/redux/actions/actividadesActions"
import { Link, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getIdActividad } from "@/redux/action-creators/actividades/getIdActividad"
import { useEffect } from "react"


const DetailActividades: React.FC = () => {
  const detail: DetailType = useAppSelector(
    state => state.actividadesReducer.detail,
  )
  const dispatch = useAppDispatch()

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
      <Link to={`/mangrullos`}>
        <button className="flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded">
          Ir atrás
        </button>
      </Link>

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