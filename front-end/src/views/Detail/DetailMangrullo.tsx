import type React from "react"
import type { DetailType } from "@/redux/actions/mangrullosActions"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getIdMangrullos } from "@/redux/action-creators/mangrullos/getIdMangrullos"
import { useEffect } from "react"
import DetailActividad from "@/features/Actividades/DetailActividad"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const DetailMangrullo: React.FC = () => {
  const detail: DetailType = useAppSelector(
    state => state.mangrullosReducer.detail,
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    dispatch(getIdMangrullos(Number(id)))
  }, [dispatch, id])

  return (
    <div>
      <div className="flex justify-between px-8">
        <p className="text-3xl align-baseline">Detalle de mangrullo</p>
        <Button
          onClick={() => navigate("/mangrullos")}
          className="rounded mb-4 border-primary"
          variant={"outline"}
        >
          Ir Atras
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2 m-16 p-4">
        <div>
          {detail ? (
            <div className="flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  className="aspect-video object-cover rounded"
                  src={detail.image}
                  alt="Imagen de playa"
                />
              </div>
              <Separator className="my-4" />
              <div className="flex p-2">
                <div className="basis-1/3">
                  <p className="text-2xl bold capitalize">{detail.zone}</p>
                  <p>Peligrosidad: {detail.dangerousness}</p>
                  <p>Calificación: {detail.qualification}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {detail.activity && <DetailActividad activity={detail.activity} />}
        </div>
      </div>
    </div>
  )
}

export default DetailMangrullo
