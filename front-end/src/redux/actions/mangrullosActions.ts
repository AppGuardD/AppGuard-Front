import type { ActionType } from "../action-types/mangrullosTypes"

export interface Mangrullo {
  id: number
  zone: string
  state: string
  image: string
  dangerousness: number
  qualification: number
}

interface cleanAction {
  type: ActionType.CLEAN
  payload: []
}

interface getAction {
  type: ActionType.GET
  payload: Mangrullo[]
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
