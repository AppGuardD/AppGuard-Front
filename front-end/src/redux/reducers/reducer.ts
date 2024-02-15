import { combineReducers } from "@reduxjs/toolkit"
import mangrullosReducer from "./mangrullosReducer"
import actividadesReducer from "./actividadesReducer"
import advicesReducer from "./advicesReducer"
import userReducer from "./userReducer"
import loginReducer from "./loginReducer"
import cartReducer from "./cartReducer"
import reviewReducer from "./reviewReducer"
import reviewMangrullosReducer from "./reviewMangrullosReducer"
import orderReducer from "./ordersReducer"

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  actividadesReducer: actividadesReducer,
  advicesReducer: advicesReducer,
  userReducer: userReducer,
  loginReducer: loginReducer,
  cartReducer: cartReducer,
  reviewReducer: reviewReducer,
  reviewMangrullosReducer: reviewMangrullosReducer,
  orderReducer: orderReducer,
})

export default reducer
