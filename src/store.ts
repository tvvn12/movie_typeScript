import { configureStore } from "@reduxjs/toolkit";
import banner from "./slices/bannerAPI";
import movielist from "./slices/movieListAPI";
import movieId from "./slices/movieDetails";
import infoCinema from "./slices/infoCinema";
import cinemaList from "./slices/cinemaList";
import lstLichChieuTheoPhim from "./slices/calneder"


const store = configureStore({
  reducer: {
    banner,
    movielist,
    movieId,
    infoCinema,
    cinemaList,
    lstLichChieuTheoPhim,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDisPatch = typeof store.dispatch;
export default store;
