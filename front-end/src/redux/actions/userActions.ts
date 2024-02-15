import type { ActionType } from "../action-types/userTypes"

export interface UserTypes {
  id: number
  userName: string
  email: string
  password: string
  typeIdentification: string
  numberIdentification: string
  rol: string
  state: string
}

export interface OrdersTypes {
  id: number
  date: string
  totalValue: number
  title: string
  status: string
  merchantId: string
  userId: number
}

export interface AdminUserTypes {
  id: number
  userName: string
  email: string
  typeIdentification: string
  numberIdentification: string
  rol: string
  state: string
}

interface postAction {
  type: ActionType.POST
  payload: UserTypes
}

interface rolAction {
  type: ActionType.ROL_EDIT
}

interface disableAction {
  type: ActionType.DISABLE
}

interface adminGetAction {
  type: ActionType.GET_ADMIN
  payload: []
}

interface orderGetAction {
  type: ActionType.GET_ORDERS
  payload: []
}

export type Action =
  | postAction
  | rolAction
  | disableAction
  | adminGetAction
  | orderGetAction
