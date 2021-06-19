import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";

const store = configureStore({
  reducer: { authReducer },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
