import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieList } from "../../slices/movieListAPI";
import { AppDisPatch, RootState } from "../../store";
import MovieBox from "./MovieBox";

type Props = {};

const MovieList = (props: Props) => {
  const [visible, setVisible] = useState(4);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.movielist
  );
    console.log(visible);
    
  const dispatch = useDispatch<AppDisPatch>();
  useEffect(() => {
    dispatch(getMovieList());
  }, []);
  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        setVisible((prevValue) => prevValue + 4);

        return newLoadings;
      });
    }, 1000);
  };

  return (
    <div id="movieList" className="mt-16 ">
      <Row className=" ">
        {data.slice(0, visible).map((item) => {
          return (
            <Col
              key={item.maPhim}
              xl={6}
              xxl={6}
              md={12}
              sm={12}
              xs={24}
              className="mt-4 flex justify-center"
            >
              <MovieBox
                id={item.maPhim}
                title={item.tenPhim}
                decs={item.biDanh}
                alt={item.tenPhim}
                src={item.hinhAnh}
              ></MovieBox>
            </Col>
          );
        })}
      </Row>
      <div>
        {visible < data.length ? (
          <Button
            type="primary"
            loading={loadings[0]}
            onClick={() => enterLoading(0)}
          >
            Load More
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default MovieList;
