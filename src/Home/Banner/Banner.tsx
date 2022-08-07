import { PlayCircleOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Image, Layout, Modal, Row, Space } from "antd";
import { DotPosition } from "antd/lib/carousel";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Banner as BannerType } from "../../interfaces/bannerInterfaces";
import { getBannerList } from "../../slices/bannerAPI";
import { AppDisPatch, RootState } from "../../store";
import ModalPOpUp from "../Modal/Modal";

const trailers: string[] = [
  "https://www.youtube.com/embed/uoKSzOuPcfY",
  "https://www.youtube.com/embed/kBY2k3G6LsM",
  "https://www.youtube.com/embed/Eu9G8nO5-Ug",
];

const Banner = () => {
  const contentStyle: React.CSSProperties = {
    color: "#fff",
    width: "100%",
    height: "600px",
    // lineHeight: "100%",
    backgroundSize: "cover",
    textAlign: "center",
    background: "#fff",
    zIndex: "-1",
  };
  const PlayerButtonStyle: React.CSSProperties = {
    left: "680px",
  };
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.banner
  );
  const dispatch = useDispatch<AppDisPatch>();
  useEffect(() => {
    dispatch(getBannerList());
  }, []);
  // console.log(data);
 

  const [trailer, setTrailer] = useState("");

  const mappedData = data.map((item, index) => ({
    ...item,
    trailer: trailers[index],
  }));

  const handleSelect = (item: BannerType) => {
    setTrailer(item.trailer);
  };

  const handleCancel = () => {
    setTrailer("");
  };

  return (
    <>
      <Carousel
      autoplay
        dotPosition="bottom"
        style={{ position: "relative", top: "60px" }}
      >
        {mappedData.map((item) => {
          return (
            <div key={item.maPhim}>
              <div>
                <img style={contentStyle} src={item.hinhAnh} alt="" />
                <div className="w-full flex justify-center">
                  <Row className="absolute bottom-96">
                    <Col className="w-full" span={24}>
                      <Button
                        style={{ backgroundColor: "inherit", border: "0px" }}
                        type="primary"
                        onClick={() => handleSelect(item)}
                      >
                        <div className="hover:bg-zinc-400 active:bg-zinc-400">
                          <PlayCircleOutlined style={{ fontSize: "90px" }} />
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>

      <ModalPOpUp trailer={trailer} handleCancel={handleCancel} />
    </>
  );
};

export default Banner;
