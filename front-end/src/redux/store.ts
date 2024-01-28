import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducers/reducer"

export const store = configureStore({
  reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
