import type { ActionType } from "../action-types/mangrullosTypes"
import type { DetailActTypes } from "./actividadesActions"

export interface ResponseDataMangrullo {
  pagination: {
    totalPages: number
    totalItems: number
    currentPage: number
  }
  requestData: MangrulloAdmin[]
}

export interface Mangrullo {
  id: number
  zone: string
  state: string
  image: string
  dangerousness: number
  qualification: number
}

export interface MangrulloAdmin {
  id: number
  zone: string
  state: string
  image: string
  dangerousness: number
  qualification: number
  description: string
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

interface putAction {
  type: ActionType.PUT
}

interface disableAction {
  type: ActionType.DISABLE
  payload: ResponseDataMangrullo
}

interface getAdminAction {
  type: ActionType.GET_ADMIN
  payload: ResponseDataMangrullo
  url: string
}

interface pageAdminAction {
  type: ActionType.PAGE_ADMIN
  payload: ResponseDataMangrullo
}

interface cleanAdminAction {
  type: ActionType.CLEAN_ADMIN
  payload: []
}

interface postAdminAction {
  type: ActionType.POST_ADMIN
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAdminAction
  | putAction
  | disableAction
  | getAdminAction
  | cleanAdminAction
  | pageAdminAction
