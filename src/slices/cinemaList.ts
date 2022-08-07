import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ListCinema } from "../interfaces/cinemaInfoList/ListCinema";
import ListCinemaAPI from "../services/cinemaList";

interface CinemaListType {
  data: ListCinema[];
  isLoading: boolean;
  error?: string | null;
}

const initialState: CinemaListType = {
  data: [],
  isLoading: false,
  error: "",
};

export const getCinemaListSlice = createAsyncThunk(
  "movies/getCinemaList",
  async () => {
    try {
      const data = await ListCinemaAPI.getCinemaList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const cinemaInfo = createSlice({
  name: "cinemaList",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(getCinemaListSlice.pending, (state) => {
      return { ...state, isLoading: true };
    });
    bulider.addCase(getCinemaListSlice.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    bulider.addCase(getCinemaListSlice.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});
export default cinemaInfo.reducer