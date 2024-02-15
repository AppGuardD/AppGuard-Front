import type { ActionType } from "../action-types/cartTypes"
import type { DetailActTypes } from "./actividadesActions"

export interface CarObjType {
  id: number
  cantidad: number
  subtotal: number
  carritoId: number
  ActivityId: number
  Activity: DetailActTypes
}

export interface CartTypes {
  id: number
  fecha: string
  userId: number
  total: number
  detalle_carrito: Array<CarObjType>
}

interface addAction {
  type: ActionType.ADD_TO_CART
  payload: CartTypes
}

interface getAction {
  type: ActionType.GET_CART
  payload: CartTypes
}

interface deleteAction {
  type: ActionType.DELETE_ITEM
  payload: CartTypes
}

interface removeAction {
  type: ActionType.REMOVE_FROM_CART
  payload: CartTypes
}

interface paymentAction {
  type: ActionType.PAYMENT
  payload: []
}

interface successAction {
  type: ActionType.SUCCESS_CART
}

export type Action =
  | addAction
  | getAction
  | deleteAction
  | removeAction
  | paymentAction
  | successAction
