import { configureStore } from "@reduxjs/toolkit";
import tweetConfigurationReducer from "./slice";

export const store = configureStore({
  reducer: {
    tweetConfiguration: tweetConfigurationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;