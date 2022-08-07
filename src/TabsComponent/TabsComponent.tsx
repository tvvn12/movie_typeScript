import { EllipsisOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  List,
  Row,
  Skeleton,
  Table,
  Tabs,
  Typography,
} from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDisPatch, RootState } from "../store";
import cinemaList, { getCinemaListSlice } from "../slices/cinemaList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

type TabPosition = "left" | "right" | "top" | "bottom";

const TabsComponent = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");

  const dispatch = useDispatch<AppDisPatch>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.cinemaList
  );
  console.log(data);

  useEffect(() => {
    dispatch(getCinemaListSlice());
  }, []);
  const navigate = useNavigate();
  const getTicket = (id: string) => {
    navigate(`/seatList/${id}`);
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Tabs tabPosition={tabPosition}>
            {data.map((item, index) => {
              return (
                <TabPane
                  tab={<img width={50} src={item.logo}></img>}
                  key={index}
                >
                  <Tabs tabPosition={tabPosition}>
                    {item.lstCumRap.map((list, index) => {
                      return (
                        <TabPane tab={list.tenCumRap} key={index}>
                          <Row>
                            <Col span={24}>
                              <div
                                id="scrollableDiv"
                                style={{
                                  height: 400,
                                  overflow: "auto",
                                  width: "95%",
                                  border: "1px solid rgba(140, 140, 140, 0.35)",
                                }}
                              >
                                <InfiniteScroll
                                  dataLength={list.danhSachPhim.length}
                                  next={() => {}}
                                  hasMore={list.danhSachPhim.length < 10}
                                  loader={
                                    <Skeleton
                                      avatar
                                      paragraph={{ rows: 1 }}
                                      active
                                    />
                                  }
                                  endMessage={
                                    <Divider plain>
                                      It is all, nothing more 🤐
                                    </Divider>
                                  }
                                  scrollableTarget="scrollableDiv"
                                >
                                  <List
                                    key={list.maCumRap}
                                    size="default"
                                    bordered
                                    dataSource={data}
                                    renderItem={() => {
                                      return list.danhSachPhim.map((name) => {
                                        return (
                                          <List.Item key={name.maPhim}>
                                            <Row style={{ width: "100%" }}>
                                              <Col
                                                style={{
                                                  padding: "0px",
                                                }}
                                                lg={4}
                                                sm={24}
                                              >
                                                <img
                                                  style={{
                                                    width: "100%",
                                                    height: "120px",
                                                  }}
                                                  src={name.hinhAnh}
                                                  alt=""
                                                />
                                              </Col>
                                              <Col
                                                style={{
                                                  marginLeft: "30px",
                                                  padding: "0px",
                                                }}
                                                lg={18}
                                                sm={24}
                                              >
                                                <h1>{name.tenPhim}</h1>
                                                <Row justify="start">
                                                  {name.lstLichChieuTheoPhim
                                                    .slice(0, 4)
                                                    .map((movie, index) => {
                                                      const time: Date =
                                                        new Date(
                                                          movie.ngayChieuGioChieu
                                                        );
                                                      return (
                                                        <Col
                                                          style={{
                                                            padding: "20px",
                                                          }}
                                                          key={name.tenPhim}
                                                          lg={{ span: 12 }}
                                                        >
                                                          <Button
                                                            onClick={() => {
                                                              getTicket(
                                                                name
                                                                  .lstLichChieuTheoPhim[
                                                                  index
                                                                ].maLichChieu
                                                              );
                                                            }}
                                                          >
                                                            {time.toDateString()}
                                                          </Button>
                                                        </Col>
                                                      );
                                                    })}
                                                </Row>
                                              </Col>
                                            </Row>
                                          </List.Item>
                                        );
                                      });
                                    }}
                                  />
                                </InfiniteScroll>
                              </div>
                            </Col>
                          </Row>
                        </TabPane>
                      );
                    })}
                  </Tabs>
                </TabPane>
              );
            })}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default TabsComponent;
