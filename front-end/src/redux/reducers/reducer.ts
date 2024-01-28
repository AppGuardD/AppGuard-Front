import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"

const reducer = combineReducers({
  mangrullos: mangrullosReducer,
})

export default reducer
