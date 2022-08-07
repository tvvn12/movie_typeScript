import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDisPatch, RootState } from "../store";
import { getMovieId } from "../slices/movieDetails";
import { Button, Col, Layout, Progress, Row, Spin } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import "./style.scss";

// import second from 'logoM.png'
const MovieDetails = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch<AppDisPatch>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.movieId
  );

  useEffect(() => {
    dispatch(getMovieId(Number(movieId)));
  }, []);
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  const style = {
    backgroundImage: `url("${data.hinhAnh}")`,
    filter: " grayscale(100%) blur(7px)",
    backgroundRepeat: " no-repeat",
    backgroundSize: "100% 100%",
  };
  const styleDe = {
    backgroundColor: "rgba(0,0,0, 0.4)",
    color: " white",
    fontWeight: "bold",
    // border: "3px solid #f1f1f1",
    position: "absolute",
    top: "50%",
    right: "-24%",
    transform: " translate(-50%, -50%)",
    zIndex: " 2",
    width: " 57%",
    padding: "20px",
    // textAlign: "center",
  } as React.CSSProperties;
  const date: Date = new Date(data.ngayKhoiChieu);

  return (
    <div>
      <Layout>
        <Header className="bg-slate-400">
          <Row className="text-center">
            <Col className="flex justify-center" span={6}>
              <img
                className="cursor-pointer"
                onClick={back}
                width={60}
                src="logoM.png"
                alt=""
              />
            </Col>
            <Col className="cursor-pointer" span={12}>
              2
            </Col>
            <Col className="cursor-pointer" span={6}>
              3
            </Col>
          </Row>
        </Header>
        {/* thằng cha: relative */}
        <Content className="relative">
          <Row >
            <Col span={8}>
              <img
                width="100%"
                style={{ height: "550px" }}
                src={data.hinhAnh}
                alt=""
              />
            </Col>
            <Col style={style} span={16}></Col>
         
          </Row>
          {/* thằng con: absolute */}
          <div>
          <Col style={styleDe} span={24}>
              <h1 className="text-zinc-50 text-3xl font-black">
                {data.tenPhim}
              </h1>
              <p>{data.moTa}</p>
              {data.dangChieu ? (
                <p>Ngày khởi chiếu : {date.toLocaleString()}</p>
              ) : null}
              <p>{data.biDanh}</p>
              <Row>
                <Col md={8} xs={4} xl={24}>
                  <Button className="btn-trailer" type="primary">
                    <a href={data.trailer}>Xem Trailer</a>
                  </Button>
                </Col>
              </Row>

              <Progress
                strokeColor={{ from: " red" }}
                type="circle"
                percent={data.danhGia}
              />
            </Col>
          </div>
           
        </Content>
       
      
      </Layout>
    </div>
  );
};

export default MovieDetails;
