import { Carousel, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import TabsComponent from "../TabsComponent/TabsComponent";
import Banner from "./Banner/Banner";
import HeaderComponent from "./Header/Header";
import MovieList from "./MovieList/MovieList";
// import HeaderComponent from "./Header/HeaderComponent";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeaderComponent></HeaderComponent>
        <Banner></Banner>
        <Content style={{backgroundColor:" #fff"}}>
          <MovieList></MovieList>
        <TabsComponent/>

        </Content>
      </Layout>
    </div>
  );
};

export default Home;
