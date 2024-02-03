import type { ActividadType } from "../action-types/actividadesTypes"

export type Name = string
export type Type = "" | "Deportivo" | "Sanitario" | "Cultural"
export type Cost = "" | "Pago" | "Gratis"
export type Order = "" | "Mayor" | "Menor"

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

export interface ResponseData{
  succes: boolean
  pagination:{
    totalPages : number
    totalItems : number
    currentPage: number
  }
  requestData:ActividadesTypes[]
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
  payload: ResponseData
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

interface searchAction {
  type: ActividadType.QUERY_BY_NAME
  payload: ActividadesTypes[]
}

interface cleanFilterAction {
  type: ActividadType.CLEAN_FILTERS
  payload: ActividadesTypes[]
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAction
  | putAction
  | disableAction
  | searchAction
  | cleanFilterAction
