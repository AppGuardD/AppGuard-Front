import type { ActionType } from "../action-types/mangrullosTypes"

export interface Mangrullo {
  id: number
  zone: string
  state: string
  image: string
  dangerousness: number
  qualification: number
}

export interface ActivityType {
  activity?: [
    {
      activityName: string
      description: string
      qualification: number
      price: number
      state: string
      type: string
    },
  ]
}

export interface DetailType {
  id?: number
  zone?: string
  state?: string
  image?: string
  dangerousness?: number
  qualification?: number
  activity?: [
    {
      activityName: string
      description: string
      qualification: number
      price: number
      state: string
      type: string
    },
  ]
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
  payload: Mangrullo
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
