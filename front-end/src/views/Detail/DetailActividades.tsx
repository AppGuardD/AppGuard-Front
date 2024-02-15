import type React from "react"
import type { DetailActTypes } from "@/redux/actions/actividadesActions"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getIdActividad } from "@/redux/action-creators/actividades/getIdActividad"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"
import { getReviews } from "@/redux/action-creators/reviews/getReview"

const DetailActividades: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const detail: DetailActTypes = useAppSelector(
    state => state.actividadesReducer.detail,
  )
  const reviews = useAppSelector(state => state.reviewReducer.review)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    try {
      dispatch(getIdActividad(id))
      dispatch(getReviews())
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }, [dispatch, id])

  return (
    <div className="mb-64">
      <div className="flex justify-between px-8">
        <Button
          onClick={() => navigate("/actividades")}
          className="rounded mb-4 border-primary"
          variant={"outline"}
        >
          Ir Atras
        </Button>
        <p className="text-3xl align-baseline">Detalle de actividad</p>
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
            <div>
              <Button
                className="mt-4"
                variant={"outline"}
                onClick={() => navigate(`/review/${detail.id}`)}
              >
                Deja tu review
              </Button>
              <div className="border p-2 rounded mt-4">
                <p>Reviews</p>
                {reviews.map(item => (
                  <div
                    className="m-2 p-2 border flex justify-between rounded"
                    key={item.id}
                  >
                    <p>{item.comment}</p>
                    <div className="flex">
                      <p>{item.qualification}</p>
                      <Star className="size-5 ml-2"></Star>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DetailActividades
