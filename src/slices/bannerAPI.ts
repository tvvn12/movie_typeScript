import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Banner } from "../interfaces/bannerInterfaces";
import bannerAPI from "../services/bannerAPI";

interface BannerType {
  data: Banner[] ;
  isLoading: boolean;
  error?: string | null;
}
const initialState: BannerType = {
  data: [],
  isLoading: false,
  error: "",
};

export const getBannerList = createAsyncThunk(
  "movies/getBannerList",
  async () => {
    try {
      const data = await bannerAPI.getBannerList();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const BannerSlices = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBannerList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getBannerList.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(getBannerList.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});

export default BannerSlices.reducer;
