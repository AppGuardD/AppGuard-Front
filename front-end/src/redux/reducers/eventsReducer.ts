//import { EventType } from "../action-types/eventsTypes"
//import type { Events, Action } from "../actions/eventsActions"
//
//interface InitialState {
//  totalPages: number
//  events: Events[]
//}
//
//const initialState: InitialState = {
//  totalPages: 0,
//  events: [],
//}
//
//const eventsReducer = (state = initialState, action: Action) => {
//  switch (action.type) {
//    case EventType.GET:
//      return { ...state, events: [...state.events, ...action.payload] }
//
//    case EventType.CLEAN:
//      return { ...state, events: action.payload }
//
//    // case ActionType.GET_ID:
//    //   return state + action.payload
//    //
//    // case ActionType.POST:
//    //   return (state = action.payload)
//    //
//    // case ActionType.PUT:
//    //   return (state = action.payload)
//    //
//    // case ActionType.DISABLE:
//    //   return (state = action.payload)
//
//    default:
//      return state
//  }
//}
//
//export default eventsReducer

