import type { EventType } from "../../action-types/eventsTypes"

export interface Events {
  activityName: string
  description: string
  image: string
  qualification: number
  price: number
  state: string
  active: boolean
  type: string
}

interface cleanAction {
  type: EventType.CLEAN
  payload: []
}

interface getAction {
  type: EventType.GET;
  payload: Events[];
}

interface getIdAction {
  type: EventType.GET_ID
}

interface postAction {
  type: EventType.POST
}

interface putAction {
  type: EventType.PUT
}

interface disableAction {
  type: EventType.DISABLE
}

export type Action =
  | cleanAction
  | getAction
  | getIdAction
  | postAction
  | putAction
  | disableAction