import type { ActionType } from "../action-types/advicesTypes"

export interface AdvicesType {
  id: number
  title: string
  comment: string
  image: string
  gravity: number
}

interface cleanAction {
  type: ActionType.CLEAN
  payload: []
}

interface getAction {
  type: ActionType.GET
  payload: AdvicesType[]
}

interface getIdAction {
  type: ActionType.GET_ID
}

interface postAction {
  type: ActionType.POST
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
