import type { ActionType } from "../action-types/loginTypes"

export interface LoginTypes {
  email: string
  password: string
  token: string
}

interface loginAction {
  type: ActionType.LOGIN
  payload: string
}

interface loginErrorAction {
  type: ActionType.LOGIN_ERROR
  payload: string
}

export type Action = loginAction | loginErrorAction
