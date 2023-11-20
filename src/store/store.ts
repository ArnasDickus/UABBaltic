import { configureStore } from "@reduxjs/toolkit";
import { swapiApi } from "./services/swapi-api";
import swapiFilmsReducer from "./slices/swapi-films-slice";
import toastAlertReducer from "./slices/toast-alert-slice";
import { weatherAppApi } from "./services/weather-app-api";
import weatherSliceReducer from "./slices/weather-slice";

export const store = configureStore({
  reducer: {
    [swapiApi.reducerPath]: swapiApi.reducer,
    [weatherAppApi.reducerPath]: weatherAppApi.reducer,

    swapiFilms: swapiFilmsReducer,
    toastAlert: toastAlertReducer,
    weatherApp: weatherSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(swapiApi.middleware, weatherAppApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
