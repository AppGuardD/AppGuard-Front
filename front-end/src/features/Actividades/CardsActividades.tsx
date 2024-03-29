import type React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import type { DetailActTypes } from "@/redux/actions/actividadesActions"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  CircleDollarSign,
  ShoppingCart,
  Star,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { addCart } from "@/redux/action-creators/carrito/addCart"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { CartTypes } from "@/redux/actions/cartActions"
import { useToast } from "@/components/ui/use-toast"

interface CardsActividadesProps {
  actividades: DetailActTypes[]
}

const CardsActividades: React.FC<CardsActividadesProps> = ({ actividades }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const carrito: CartTypes = useAppSelector(state => state.cartReducer.carrito)
  const userId = localStorage.getItem("USERID")
  const token = localStorage.getItem("TOKEN")
  const { toast } = useToast()

  const handleAddtoCart = (ActivityId: number) => {
    toast({
      title: "Appguard",
      description: "Se ha añadido al carrito",
    })
    const actividad = {
      userId,
      ActivityId,
      cantidad: 1,
    }
    dispatch(addCart({ data: actividad, token: token }))
  }

  if (actividades.length === 0) {
    return (
      <div className="flex h-svh">
        <p className="mx-auto mt-60 font-bold text-3xl">
          No hay coincidencias.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap justify-center mx-2 mb-6">
      {actividades.map(actividad => (
        <Card key={actividad.id} className="rounded m-4 size-96">
          <CardHeader>
            <CardTitle className="capitalize">
              {actividad.activityName}
            </CardTitle>
          </CardHeader>
          <CardContent className="rounded overflow-hidden aspect-video">
            <img
              className="object-cover aspect-video rounded"
              src={actividad.image}
              alt="Actividad"
            />
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="grid grid-cols-2 place-items-center w-full px-8">
              {actividad.price !== 0 ? (
                <div className="flex mr-auto">
                  <CircleDollarSign className="size-5 mr-2" />
                  <p>{actividad.price}</p>
                </div>
              ) : (
                <div className="flex mr-auto">
                  <CircleDollarSign className="size-5 mr-2" />
                  <p>Gratis</p>
                </div>
              )}
              {actividad.qualification ? (
                <div className="flex ml-auto">
                  <Star className="size-5 mr-2" />
                  <p>{actividad.qualification}</p>
                </div>
              ) : null}
            </div>
            <Separator className="mt-2" />
            <div className="flex justify-between">
              <Button
                variant={"ghost"}
                onClick={() => navigate(`/actividades/detail/${actividad.id}`)}
              >
                Conocer mas
                <ChevronRight className="size-5 ml-2" />
              </Button>
              {!token ? (
                <Button variant={"ghost"} disabled>
                  Añadir al carrito
                  <ShoppingCart className="size-5 ml-2" />
                </Button>
              ) : carrito.detalle_carrito.some(
                  carrito => carrito.Activity.id === actividad.id,
                ) ? (
                <Button variant={"ghost"} disabled>
                  Añadir al carrito
                  <ShoppingCart className="size-5 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => handleAddtoCart(actividad.id)}
                  variant={"ghost"}
                >
                  Añadir al carrito
                  <ShoppingCart className="size-5 ml-2" />
                </Button>
              )}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardsActividades
