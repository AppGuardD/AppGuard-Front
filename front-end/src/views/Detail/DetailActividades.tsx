import type React from "react"
import type { DetailType } from "@/redux/actions/actividadesActions"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getIdActividad } from "@/redux/action-creators/actividades/getIdActividad"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

const DetailActividades: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const detail: DetailType = useAppSelector(
    state => state.actividadesReducer.detail,
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      dispatch(getIdActividad(id))
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }, [dispatch, id])

  return (
    <div className="mb-64">
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
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="h-96 ml-auto aspect-video overflow-hidden">
            <img
              className="h-96 ml-auto aspect-video rounded object-cover"
              src={detail.image}
              alt="Imagen de playa"
            />
          </div>
          <div className="w-80 mr-auto">
            <p className="text-4xl font-thin capitalize">
              {detail.activityName}
            </p>
            <Separator className="my-2" />
            <p className="w-80">{detail.description}</p>
            <Separator className="my-2" />
            <div className="flex">
              <p>
                <b>Calificación: </b>
                {detail.qualification}
              </p>
              <Star className="inline-block align-middle ml-2 size-5" />
            </div>
            <p>
              <b>Valor: </b>
              {detail.state}
            </p>
            <p>
              <b>Precio: </b>
              {detail.price}
            </p>
            <p>
              <b>Tipo: </b>
              {detail.type}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DetailActividades
