import type { ActionType } from "../action-types/cartTypes"

export interface CarObjType {
  id?: number,
  cantidad?: number,
  subtotal?: number,
  carritoId?: number,
  ActivityId?: number,
  Activity?: Object
}

export interface CartTypes {
  id: number,
  fecha: string,
  userId: number,
  total: number,
  detalle_carrito?: Array<CarObjType>
}



interface addAction {
  type: ActionType.ADD_TO_CART
  payload: CartTypes
}

interface getAction {
  type: ActionType.GET_CART,
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

export type Action =
  | addAction
  | getAction
  | deleteAction
  | removeAction
