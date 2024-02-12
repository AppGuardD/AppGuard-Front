import type { ActionType } from "../action-types/loginTypes"

export interface LoginTypes {
  email: string
  password: string
  token: string
}

interface cleanAction {
  type: ActionType.CLEAN
  payload: []
}

interface getAction {
  type: ActionType.GET
  payload: LoginTypes[]
}

interface getIdAction {
  type: ActionType.GET_ID
  payload: LoginTypes
}

interface postAction {
  type: ActionType.POST
  payload: string
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
