import { combineReducers } from "@reduxjs/toolkit";
import mangrullosReducer from "./mangrullosReducer";
import actividadesReducer from "./actividadesReducer";
import advicesReducer from "./advicesReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import googleLoginReducer from "./googleLoginReducer";
// import cartReducer from "./cartReducer";
import reviewReducer from "./reviewReducer";

const reducer = combineReducers({
  mangrullosReducer: mangrullosReducer,
  actividadesReducer: actividadesReducer,
  advicesReducer: advicesReducer,
  userReducer: userReducer,
  loginReducer: loginReducer,
  // cartReducer: cartReducer,
  reviewReducer: reviewReducer,
  googleLoginReducer:googleLoginReducer
});

export default reducer;
