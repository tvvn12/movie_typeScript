import { Banner } from "../interfaces/bannerInterfaces";
import axiosClient from "./axiosClient";

const bannerAPI = {
  getBannerList: () => {
    return axiosClient.get<unknown, Banner[]>("QuanLyPhim/LayDanhSachBanner");
  },
};

export default bannerAPI;
