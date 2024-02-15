import { ActionType } from "../action-types/ordersTypes"
export interface Order {
  id: number
  date: number
  totalValue: number
  title: string
  status: string
  merchantId: number
  userId: number
}

interface getOrders {
  type: ActionType.GET_USER_ORDERS_REQUEST
  payload: Order
}

interface getOrderSucces {
  type: ActionType.GET_USER_ORDERS_SUCCESS
  payload: Order
}

interface getOrderFailure {
  type: ActionType.GET_USER_ORDERS_FAILURE
  payload: Order
}

export type Action = getOrders | getOrderSucces | getOrderFailure
