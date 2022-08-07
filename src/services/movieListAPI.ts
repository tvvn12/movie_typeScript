import { MovieList } from "../interfaces/getMovieListInterFace";
import { MovieInfo } from "../interfaces/infoMovie";
import axiosClient from "./axiosClient";

const MovieListAPI = {

  getMovieList: () => {
    return axiosClient.get<unknown, MovieList[]>(`QuanLyPhim/LayDanhSachPhim`);
  },
  getMovieId: (movieId: number)=>{
    return axiosClient.get<unknown, MovieInfo>(`QuanLyPhim/LayThongTinPhim?maPhim=${movieId}`);
  }
};
export default MovieListAPI;