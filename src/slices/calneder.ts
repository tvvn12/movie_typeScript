import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ListCinema ,lstLichChieuTheoPhim} from "../interfaces/cinemaInfoList/ListCinema";
import ListCinemaAPI from "../services/cinemaList";

interface CinemaListType {
  data: lstLichChieuTheoPhim[];
  isLoading: boolean;
  error?: string | null;
}

const initialState: CinemaListType = {
  data: [],
  isLoading: false,
  error: "",
};

export const getlstLichChieuTheoPhimSlice = createAsyncThunk(
  "movies/lstLichChieuTheoPhim",
  async () => {
    try {
      const data = await ListCinemaAPI.getlstLichChieuTheoPhim();
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
    bulider.addCase(getlstLichChieuTheoPhimSlice.pending, (state) => {
      return { ...state, isLoading: true };
    });
    bulider.addCase(getlstLichChieuTheoPhimSlice.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    bulider.addCase(getlstLichChieuTheoPhimSlice.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});
export default cinemaInfo.reducer