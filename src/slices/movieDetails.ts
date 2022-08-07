
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieInfo } from "../interfaces/infoMovie";
import MovieListAPI from "../services/movieListAPI";

interface MovieListType {
    data: MovieInfo ;
    isLoading: boolean;
    error?: string | null;
  }

  const initialState: MovieListType = {
    data: {} as MovieInfo,
    isLoading: false,
    error: "",
  };

  export const getMovieId = createAsyncThunk(
    "movies/getMovieId",
    async (id: number) => {
      try {
        const data = await MovieListAPI.getMovieId(id);
        return data;
      } catch (error) {
        throw error;
      }
    }
  );

  const MovieId = createSlice({
    name: "movieId",
    initialState,
    reducers: {},
    extraReducers: (bulider) => {
      bulider.addCase(getMovieId.pending, (state) => {
        return { ...state, isLoading: true };
      });
      bulider.addCase(getMovieId.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, data: payload };
      });
      bulider.addCase(getMovieId.rejected, (state, { error }) => {
        return { ...state, isLoading: false, error: error.message };
      });
    },
  });
  
  export default MovieId.reducer;