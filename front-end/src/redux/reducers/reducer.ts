import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"
import actividadesReducer from "./actividadesReducer"
import advicesReducer from "./advicesReducer"

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  actividadesReducer: actividadesReducer,
  advicesReducer: advicesReducer,
})

export default reducer
