import type { ActividadType } from "../action-types/actividadesTypes"

export interface ActividadesTypes {
  id: number
  activityName: string
  description: string
  image: string
  qualification: number
  price: number
  state: string
  active: boolean
  type: string
}
export interface DetailType {   
      activityName?: string
      description?: string
      qualification?: number
      price?: number
      state?: string
      type?: string 
      image?: string
}

interface cleanAction {
  type: ActividadType.CLEAN
  payload: []
}

interface getAction {
  type: ActividadType.GET
  payload: ActividadesTypes[]
}

interface getIdAction {
  type: ActividadType.GET_ID
  payload: DetailType
}

interface postAction {
  type: ActividadType.POST
}

interface putAction {
  type: ActividadType.PUT
}

interface disableAction {
  type: ActividadType.DISABLE
}

interface filterAction {
  type: ActividadType.FILTER;
  payload: ActividadesTypes[];
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAction
  | putAction
  | disableAction
  | filterAction
