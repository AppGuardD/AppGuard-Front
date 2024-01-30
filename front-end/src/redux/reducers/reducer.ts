import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"
//import eventsReducer from "./eventsReducer"
import advicesReducer from "./advicesReducer"

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  //eventsReducer: eventsReducer,
  advicesReducer: advicesReducer,
})

export default reducer
