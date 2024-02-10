import { getCart } from "@/redux/action-creators/carrito/getItems"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import type { CartTypes } from "@/redux/actions/cartActions"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2Icon } from "lucide-react"
import { addCart } from "@/redux/action-creators/carrito/addCart"
import { deleteItem } from "@/redux/action-creators/carrito/deleteItem"
import { removeItem } from "@/redux/action-creators/carrito/removeItem"

const Cart: React.FC = () => {
  const carrito: CartTypes = useAppSelector(state => state.cartReducer.carrito)
  const dispatch = useAppDispatch()
  const userId = 2

  const carritoId = localStorage.getItem("ID_CARRITO")

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart(userId))
    }

    fetchData()
  }, [dispatch, userId])

  const handleAddtoCart = (ActivityId: number) => {
    const actividad = {
      userId,
      ActivityId,
      cantidad: 1,
    }
    dispatch(addCart(actividad))
  }

  const handleDeleteItem = (ActivityId: number) => {
    const Item = {
      userId,
      ActivityId,
    }
    dispatch(deleteItem(Item))
  }

  const handleRemoveItem = (ActivityId: number) => {
    const Item = {
      userId,
      carritoId,
      ActivityId,
    }
    dispatch(removeItem(Item))
  }

  return (
    <div className="flex  justify-center">
      <div className="max-w-3xl w-full">
        {carrito.detalle_carrito?.length !== 0 ? (
          carrito.detalle_carrito?.map(item => (
            <div
              key={item.id}
              className="shadow-md rounded-lg overflow-hidden mb-8 "
            >
              <div className="flex">
                <div className="w-1/3 relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={item.Activity.image}
                    alt={item.Activity.activityName}
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h2 className="text-lg font-bold">
                    {item.Activity.activityName}
                  </h2>

                  <p className="mt-2">
                    Precio Unitario: ${item.Activity.price}
                  </p>
                  <p className="mt-2">Subtotal: ${item.subtotal}</p>
                  <div className="mt-2 flex flex-row">
                    <p className="">Cantidad: </p>
                    <Button
                      onClick={() => handleRemoveItem(item.ActivityId)}
                      variant={"ghost"}
                      className="mr-2"
                    >
                      <Minus className="ml-2" />
                    </Button>
                    <p className="m-2">{item.cantidad}</p>
                    <Button
                      onClick={() => handleAddtoCart(item.ActivityId)}
                      variant={"ghost"}
                      className="mr-2"
                    >
                      <Plus className="ml-2" />
                    </Button>

                    <Button
                      onClick={() => handleDeleteItem(item.ActivityId)}
                      variant={"ghost"}
                    >
                      Eliminar del carrito
                      <Trash2Icon className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 p-6"></div>
            </div>
          ))
        ) : (
          <h1 className="text-2xl font-semibold text-center my-16">
            Selecciona actividades para agregar al carrito.
          </h1>
        )}
      </div>
      <div className="w-64 p-4 space-y-4 content-start">
        <h2 className="text-lg font-bold mb-2">Cantidad de boletos: </h2>
        {carrito.detalle_carrito?.length === 1 ? (
          <h3 className="text-lg mb-2">
            {carrito.detalle_carrito?.length} actividad
          </h3>
        ) : (
          <h3 className="text-lg ml-4 mb-2">
            {carrito.detalle_carrito?.length} actividades
          </h3>
        )}
        <h2 className="text-lg font-bold mb-2">Total de la compra</h2>
        <p className="text-2xl ml-4">${carrito.total}</p>
        <Button variant={"ghost"}>
          Ir a Pagar
          <Trash2Icon className="ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default Cart
