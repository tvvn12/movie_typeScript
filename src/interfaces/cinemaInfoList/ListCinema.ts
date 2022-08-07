export interface ListCinema {
  lstCumRap: LstCumRap[];
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
}

interface LstCumRap {
  danhSachPhim: danhSachPhim[];
  diaChi: string;
  hinhAnh: string;
  maCumRap: string;
  tenCumRap: string;
}
export interface danhSachPhim {
  lstLichChieuTheoPhim: lstLichChieuTheoPhim[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}
export interface lstLichChieuTheoPhim {
  maLichChieu: string;
  maRap: number;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
}
