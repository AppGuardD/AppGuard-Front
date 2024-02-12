import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"
import actividadesReducer from "./actividadesReducer"
import advicesReducer from "./advicesReducer"
import userReducer from "./userReducer"
import loginReducer from "./loginReducer"
import reviewReducer from "./reviewReducer"
import reviewMangrullosReducer from "./reviewMangrullosReducer"

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  actividadesReducer: actividadesReducer,
  advicesReducer: advicesReducer,
  userReducer: userReducer,
  loginReducer: loginReducer,
  cartReducer: cartReducer,
  reviewReducer: reviewReducer,
  reviewMangrullosReducer: reviewMangrullosReducer,
})

export default reducer;
