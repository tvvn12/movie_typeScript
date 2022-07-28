import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDisPatch, RootState } from "../store";
import { getMovieId } from "../slices/movieDetails";
import { Col, Layout, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
// import second from 'logoM.png'

const MovieDetails = () => {
 
  const { movieId } = useParams();

    console.log(movieId);
  const dispatch = useDispatch<AppDisPatch>();
  const { data } = useSelector((state: RootState) => state.movieId);

  useEffect(() => {
    dispatch(getMovieId(Number(movieId)));
  }, []);
  console.log(data);
  
  return <div>
    <Layout>
        <Header className="bg-slate-50">
            <Row className="text-center">
                <Col className="flex justify-center" span={6}>
                </Col>
                <Col span={12}>2</Col>
                <Col span={6}>3</Col>
            </Row>
        </Header>
    </Layout>
  </div>;
};

export default MovieDetails;
