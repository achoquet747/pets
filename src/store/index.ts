// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import pets from "./pets";

export const store = configureStore({
  reducer: {
    pets
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
