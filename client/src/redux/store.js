import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import PersonReducer from "./features/personSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    person: PersonReducer,
  },
});
 