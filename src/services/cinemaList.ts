import { ListCinema ,lstLichChieuTheoPhim} from "../interfaces/cinemaInfoList/ListCinema"
import axiosClient from "./axiosClient"


const ListCinemaAPI={

    getCinemaList: ()=>{
        return axiosClient.get<unknown,ListCinema[]>("QuanLyRap/LayThongTinLichChieuHeThongRap")
    },
    
    getlstLichChieuTheoPhim: ()=>{
        return axiosClient.get<unknown,lstLichChieuTheoPhim[]>("QuanLyRap/LayThongTinLichChieuHeThongRap")
    }
}
export default ListCinemaAPI;