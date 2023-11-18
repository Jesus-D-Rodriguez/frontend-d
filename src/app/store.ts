import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/store";

export default configureStore({
  reducer: { auth: authReducer },
});
