import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CinemaInfo } from "../interfaces/CinemaInfo";
import infoCinemaAPI from "../services/infoCinema";

interface InfoCinema {
  data: CinemaInfo[];
  isLoading: boolean;
  error?: string | null;
}

const initialState: InfoCinema = {
  data: [],
  isLoading: false,
  error: "",
};

export const getInfoCinemaList = createAsyncThunk(
  "movies/getCinemaInfoList",
  async () => {
    try {
      const data = await infoCinemaAPI.getInfoCinemaList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const InfoCinema = createSlice({
    name: "infoCinema",
    initialState,
    reducers:{},
    extraReducers: (bulider) => {
        bulider.addCase(getInfoCinemaList.pending, (state) => {
          return { ...state, isLoading: true };
        });
        bulider.addCase(getInfoCinemaList.fulfilled, (state, { payload }) => {
          return { ...state, isLoading: false, data: payload };
        });
        bulider.addCase(getInfoCinemaList.rejected, (state, { error }) => {
          return { ...state, isLoading: false, error: error.message };
        });
      },
})

export default InfoCinema.reducer;