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

interface cleanAction {
  type: ActionType.CLEAN
  payload: []
}

interface getAction {
  type: ActionType.GET
  payload: UserTypes
}

interface getIdAction {
  type: ActionType.GET_ID
  payload: UserTypes
}

interface postAction {
  type: ActionType.POST
  payload: UserTypes
}

interface putAction {
  type: ActionType.PUT
}

interface disableAction {
  type: ActionType.DISABLE
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAction
  | putAction
  | disableAction
