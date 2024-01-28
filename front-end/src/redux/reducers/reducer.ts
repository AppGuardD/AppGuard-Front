import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
})

export default reducer
