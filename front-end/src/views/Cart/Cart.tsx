import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { getCart } from "@/redux/action-creators/carrito/getItems"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Minus, Plus, Trash2Icon } from "lucide-react"
import { addCart } from "@/redux/action-creators/carrito/addCart"
import { deleteItem } from "@/redux/action-creators/carrito/deleteItem"
import { removeItem } from "@/redux/action-creators/carrito/removeItem"
import { Card } from "@/components/ui/card"
import type { CartTypes } from "@/redux/actions/cartActions"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from "react-router-dom"
import { paymentCart } from "@/redux/action-creators/carrito/payment"

const Cart: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const url = useAppSelector(state => state.cartReducer.mercadopagoURL)
  const carrito: CartTypes = useAppSelector(state => state.cartReducer.carrito)
  const carritoId = useAppSelector(state => state.cartReducer.carritoId)
  const userId = localStorage.getItem("USERID")
  const token = localStorage.getItem("TOKEN")

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart({ userId: userId, token: token }))
    }
    fetchData()
  }, [dispatch, userId, token])

  const handleAddtoCart = (ActivityId: number) => {
    const actividad = {
      userId,
      ActivityId,
      cantidad: 1,
    }
    dispatch(addCart({ data: actividad, token: token }))
  }

  const handleDeleteItem = (ActivityId: number) => {
    const Item = {
      userId,
      ActivityId,
    }
    dispatch(deleteItem({ data: Item, token: token }))
  }

  const handleRemoveItem = (ActivityId: number) => {
    const token = localStorage.getItem("TOKEN")
    const Item = {
      userId,
      ActivityId,
      carritoId,
    }
    dispatch(removeItem({ data: Item, token: token }))
  }

  const handlePayment = () => {
    const arrayItemsPay = carrito.detalle_carrito.map(item => ({
      title: item.Activity.activityName,
      description: item.Activity.description,
      quantity: item.cantidad,
      unit_price: item.Activity.price,
    }))
    dispatch(paymentCart({ id: userId, token: token, carrito: arrayItemsPay }))
  }

  return (
    <div className="flex justify-center">
      <div className="">
        {carrito.detalle_carrito?.length !== 0 ? (
          carrito.detalle_carrito?.map(item => (
            <Card key={item.id} className="aspect-[4/1] flex my-6 p-6">
              <div className="rounded overflow-hidden aspect-[4/3] h-56">
                <img
                  className="object-cover rounded aspect-[4/3] h-56"
                  src={item.Activity.image}
                  alt={item.Activity.activityName}
                />
              </div>
              <div className="pl-6 w-96 flex flex-col">
                <div className="flex justify-between">
                  <p className="text-3xl font-bold">
                    {item.Activity.activityName}
                  </p>
                  <Button
                    className="p-0 size-5"
                    onClick={() => handleDeleteItem(item.ActivityId)}
                    variant={"ghost"}
                  >
                    <Trash2Icon className="size-5" />
                  </Button>
                </div>

                <p className="mt-2">Precio Unitario: ${item.Activity.price}</p>
                <p className="mt-2">Subtotal: ${item.subtotal}</p>
                <Pagination className="flex h-full w-full">
                  <PaginationContent className="self-end ml-auto">
                    <PaginationItem>
                      {item.cantidad === 1 ? (
                        <Button
                          variant={"ghost"}
                          className="p-0 size-10"
                          disabled
                        >
                          <Minus className="size-5" />
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleRemoveItem(item.ActivityId)}
                          variant={"ghost"}
                          className="p-0 size-10"
                        >
                          <Minus className="size-5" />
                        </Button>
                      )}
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink className="text-lg">
                        {item.cantidad}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <Button
                        onClick={() => handleAddtoCart(item.ActivityId)}
                        variant={"ghost"}
                        className="p-0 size-10"
                      >
                        <Plus className="size-5" />
                      </Button>
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </Card>
          ))
        ) : (
          <div className="h-svh flex">
            <Button
              className="my-36 text-xl"
              variant={"link"}
              onClick={() => navigate("/actividades")}
            >
              Selecciona actividades para agregar al carrito.
            </Button>
          </div>
        )}
      </div>
      <div className="w-64 ml-6 p-4 space-y-4 content-start border-l">
        <h2 className="text-xl font-bold mb-2">Cantidad de boletos </h2>
        {carrito.detalle_carrito?.length === 1 ? (
          <h3 className="text-xl mb-2">
            {carrito.detalle_carrito?.length} actividad
          </h3>
        ) : (
          <h3 className="text-xl ml-4 mb-2">
            {carrito.detalle_carrito?.length} actividades
          </h3>
        )}
        <Separator className="my-2" />
        <h2 className="text-xl font-bold mb-2">Total de la compra</h2>
        <p className="text-xl ml-4">${carrito.total}</p>
        <Separator className="my-2" />
        {carrito.detalle_carrito.length !== 0 ? (
          <Button onClick={handlePayment} variant={"ghost"} className="text-xl">
            Ir a Pagar
            <ChevronRight className="ml-2" />
          </Button>
        ) : (
          <Button disabled variant={"ghost"} className="text-xl">
            Ir a Pagar
            <ChevronRight className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}

export default Cart
