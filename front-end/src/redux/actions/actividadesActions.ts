import type { ActionType } from "../action-types/actividadesTypes"

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
  type: ActionType.CLEAN
  payload: []
}

interface getAction {
  type: ActionType.GET
  payload: ResponseData
  url: string
}

interface getIdAction {
  type: ActionType.GET_ID
  payload: DetailType
}

interface getAdminAction {
  type: ActionType.GET_ADMIN
  payload: ActividadesTypes[]
}

interface cleanAdminAction {
  type: ActionType.CLEAN_ADMIN
  payload: []
}

interface postAction {
  type: ActionType.POST
}

interface putAction {
  type: ActionType.PUT
}

interface disableAction {
  type: ActionType.DISABLE
  payload: ActividadesTypes[]
}

interface pageAction {
  type: ActionType.PAGE
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
  | getAdminAction
  | cleanAdminAction
