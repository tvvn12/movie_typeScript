import { useParams } from "react-router-dom";
import { MovieList } from "../interfaces/getMovieListInterFace";
import axiosClient from "./axiosClient";

const MovieListAPI = {

  getMovieList: () => {
    return axiosClient.get<unknown, MovieList[]>(`QuanLyPhim/LayDanhSachPhim`);
  },
  getMovieId: (movieId: number)=>{
    return axiosClient.get<unknown, MovieList[]>(`QuanLyPhim/LayThongTinPhim?maPhim=${movieId}`);
  }
};
export default MovieListAPI;