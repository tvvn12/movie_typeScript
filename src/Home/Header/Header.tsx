import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Layout, Menu, Row } from "antd";
import { CameraOutlined, HeatMapOutlined } from "@ant-design/icons";
import { NavLink, To } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import type { MenuProps } from "antd";
const HeaderComponent = () => {
  const { Header } = Layout;
  interface TypeNavigate {
    name: string;
    navigate: string;
  }
  const navigate: TypeNavigate[] = [
    {
      name: "Phim đang chiếu",
      navigate: "movieList",
    },
    {
      name: "Lịch chiếu",
      navigate: "movieList",
    },
    {
      name: "Cụm Rạp",
      navigate: "movieList",
    },
  ];

  return (
    <div className="relative z-10">
      <div className="fixed top-0 left-0 right-0">
        <Header style={{ backgroundColor: "#fff" }}>
          <Row>
            <Col className="flex justify-center" span={6}>
              <img
                className="cursor-pointer"
                width={60}
                src="logoM.png"
                alt=""
              />
            </Col>
            <Col span={12}>
              <Menu
                className="flex justify-center"
                theme="light"
                mode="horizontal"
                // defaultSelectedKeys={["2"]}
                items={navigate.map((item, index) => {
                  const key = index + 1;
                  return {
                    key,
                    label: (
                      <Link smooth={true} to={item.navigate}>
                        {item.name}
                      </Link>
                    ),
                  };
                })}
              />
            </Col>
            <Col span={6}></Col>
          </Row>
        </Header>
      </div>
    </div>
  );
};

export default HeaderComponent;
