import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./registrationSlice";
import { registrationApi } from "./registrationApi";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    [registrationApi.reducerPath]: registrationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registrationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
