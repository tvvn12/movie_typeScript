import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Layout, Menu, Row } from "antd";
import { CameraOutlined, HeatMapOutlined } from "@ant-design/icons";
import { NavLink, To } from "react-router-dom";
import { Link, animateScroll } from "react-scroll";
import type { MenuProps } from "antd";

interface Type {
  name: string;
  navigate: string;
}
const { Header } = Layout;

const HeaderComponent = () => {
  const items: MenuProps["items"] = [
    {
      label: "Navigation One",
      key: "mail",
      icon: "",
    },
  ];

  return (
    <div className="relative z-10">
      <div className="fixed top-0 left-0 right-0">
        <Header style={{ backgroundColor: "#fff" }}>
          <Row>
            <Col span={6}>
              <img width={60} src="logoM.png" className="logo" alt="" />
            </Col>
            <Col span={12}>
              <Menu
                className="flex justify-center"
                theme="light"
                mode="horizontal"
                // defaultSelectedKeys={["2"]}
                items={items}
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