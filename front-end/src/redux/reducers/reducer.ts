import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullos/mangrullosReducer"
import eventsReducer from "./events/eventsReducer"

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  eventsReducer:  eventsReducer,
})

export default reducer
