import type { ActionType } from "../action-types/actividadesTypes"

export type Name = string
export type Type = "" | "Deportivo" | "Sanitario" | "Cultural"
export type Cost = "" | "Pago" | "Gratis"
export type Order = "" | "Mayor" | "Menor"

export interface ResponseData {
  succes: boolean
  pagination: {
    totalPages: number
    totalItems: number
    currentPage: number
  }
  requestData: DetailType[]
}

export interface DetailType {
  id: number
  activityName?: string
  description?: string
  image?: string
  qualification?: number
  price?: number
  active?: boolean
  state?: "Gratis" | "Pago"
  type?: "Deportivo" | "Sanitario" | "Cultural"
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
  payload: ResponseData
  url: string
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
  payload: DetailType[]
}

interface pageAction {
  type: ActionType.PAGE
  payload: ResponseData
}

interface pageAdminAction {
  type: ActionType.PAGE_ADMIN
  payload: ResponseData
}

interface imageAction {
  type: ActionType.IMAGE
  payload: string
}

interface loadingAction {
  type: ActionType.IMAGE_LOADING
  payload: boolean
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAction
  | putAction
  | disableAction
  | pageAction
  | pageAdminAction
  | getAdminAction
  | cleanAdminAction
  | imageAction
  | loadingAction
