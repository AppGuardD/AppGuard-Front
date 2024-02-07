import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"
import actividadesReducer from "./actividadesReducer"
import advicesReducer from "./advicesReducer"
import userReducer from "./userReducer"
import loginReducer from "./loginReducer"
import reviewReducer from "./reviewReducer"
const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  actividadesReducer: actividadesReducer,
  advicesReducer: advicesReducer,
  userReducer: userReducer,
  loginReducer:loginReducer,
  reviewReducer: reviewReducer
})

export default reducer
