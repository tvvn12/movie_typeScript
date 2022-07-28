import { configureStore } from "@reduxjs/toolkit";
import banner from "./slices/bannerAPI";
import movielist from "./slices/movieListAPI";
import movieId from "./slices/movieDetails";

const store = configureStore({
  reducer: {
    banner,
    movielist,
    movieId,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch;
export default store;
