import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import reducer from './reducer';

export type RootState = ReturnType<typeof reducer>

const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;