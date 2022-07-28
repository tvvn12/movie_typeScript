import { Carousel, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
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
        </Content>
      </Layout>
    </div>
  );
};

export default Home;
