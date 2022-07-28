import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieList } from "../interfaces/getMovieListInterFace";
import MovieListAPI from "../services/movieListAPI";

interface MovieListType {
  data: MovieList[];
  isLoading: boolean;
  error?: string | null;
}

const initialState: MovieListType = {
  data: [],
  isLoading: false,
  error: "",
};

export const getMovieList = createAsyncThunk(
  "movies/getMovieList",
  async () => {
    try {
      const data = await MovieListAPI.getMovieList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

// export const getMovieId = createAsyncThunk(
//   "movies/getMovieList",
//   async () => {
//     try {
//       const data = await MovieListAPI.getMovieId;
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );
const MovieListSlice = createSlice({
  name: "movielist",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(getMovieList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    bulider.addCase(getMovieList.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    bulider.addCase(getMovieList.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});
// const MovieListId = createSlice({
//   name: "movieId",
//   initialState,
//   reducers: {},
//   extraReducers: (bulider) => {
//     bulider.addCase(getMovieList.pending, (state) => {
//       return { ...state, isLoading: true };
//     });
//     bulider.addCase(getMovieList.fulfilled, (state, { payload }) => {
//       return { ...state, isLoading: false, data: payload };
//     });
//     bulider.addCase(getMovieList.rejected, (state, { error }) => {
//       return { ...state, isLoading: false, error: error.message };
//     });
//   },
// });
// console.log(data);

export default MovieListSlice.reducer;


