import type React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getIdMangrullos } from "@/redux/action-creators/mangrullos/getIdMangrullos"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import DetailActInMangrullos from "@/features/Actividades/DetailActInMangrullos"

const DetailMangrullo: React.FC = () => {
  const detail = useAppSelector(state => state.mangrullosReducer.detail)
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
      <div className="flex flex-col w-full px-8">
        {detail ? (
          <div className="flex justify-center">
            <div className="p-4 px-auto">
              <p className="text-4xl font-bold capitalize">{detail.zone}</p>
              <Separator className="my-4" />
              <div className="mx-auto aspect-video overflow-hidden rounded h-96">
                <img
                  className="aspect-video object-cover rounded h-96"
                  src={detail.image}
                  alt="Imagen de playa"
                />
              </div>
              <Separator className="my-4 border border-primary" />
              <p className="mx-auto w-max text-2xl">
                Actividades en este mangrullo.
              </p>
            </div>
          </div>
        ) : null}
        {detail.activity ? (
          <DetailActInMangrullos actividades={detail.activity} />
        ) : null}
      </div>
    </div>
  )
}

export default DetailMangrullo
