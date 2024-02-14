import { ActionType } from "@/redux/action-types/cartTypes"
import type { CartTypes, Action } from "@/redux/actions/cartActions"

interface InitialState {
  mercadopagoURL: string
  carrito: CartTypes
  carritoId: number | null
}

const initialState: InitialState = {
  mercadopagoURL: "",
  carritoId: null,
  carrito: {
    id: 0,
    fecha: "",
    userId: 0,
    total: 0,
    detalle_carrito: [],
  },
}

const sortDetalleCarrito = (carrito: CartTypes) => {
  return {
    ...carrito,
    detalle_carrito: carrito.detalle_carrito?.sort((a, b) => a?.id - b?.id),
  }
}

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.PAYMENT:
      return {
        ...state,
        mercadopagoURL: action.payload,
      }

    case ActionType.ADD_TO_CART:
      return {
        ...state,
        carrito: sortDetalleCarrito(action.payload),
        carritoId: action.payload.id,
      }

    case ActionType.GET_CART:
      return {
        ...state,
        carrito: sortDetalleCarrito(action.payload),
        carritoId: action.payload.id,
      }

    case ActionType.DELETE_ITEM:
      return {
        ...state,
        carrito: sortDetalleCarrito(action.payload),
        carritoId: action.payload.id,
      }

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        carrito: sortDetalleCarrito(action.payload),
        carritoId: action.payload.id,
      }

    default:
      return state
  }
}

export default cartReducer
