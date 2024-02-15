import type { ActionType } from "../action-types/mangrullosTypes"
import type { DetailActTypes } from "./actividadesActions"

export interface Mangrullo {
  id: number
  zone: string
  state: string
  image: string
  dangerousness: number
  qualification: number
}

export interface DetailMangrulloType {
  activity: DetailActTypes[]
  id: number
  dangerousness: number
  qualification: number
  zone: string
  state: string
  image: string
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
  payload: DetailMangrulloType
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
