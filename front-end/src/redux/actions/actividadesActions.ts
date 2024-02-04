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

export interface ResponseData {
  succes: boolean
  pagination: {
    totalPages: number
    totalItems: number
    currentPage: number
  }
  requestData: ActividadesTypes[]
}

export interface DetailType {
  id?: number
  activityName?: string
  description?: string
  image?: string
  qualification?: number
  price?: number
  state?: string
  active?: boolean
  type?: string
}

interface cleanAction {
  type: ActividadType.CLEAN
  payload: []
}

interface getAction {
  type: ActividadType.GET
  payload: ResponseData
  url: string
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

interface pageAction {
  type: ActividadType.PAGE
  payload: ResponseData
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAction
  | putAction
  | disableAction
  | pageAction
