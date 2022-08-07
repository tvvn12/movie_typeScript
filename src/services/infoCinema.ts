import axios from "axios";
import { CinemaInfo } from "../interfaces/CinemaInfo";
import axiosClient from "./axiosClient";
const infoCinemaAPI = {
  getInfoCinemaList: () => {
    return axiosClient.get<unknown, CinemaInfo[]>(`QuanLyRap/LayThongTinHeThongRap`);
  },
};
export default infoCinemaAPI;
