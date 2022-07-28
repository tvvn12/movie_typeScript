import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MovieBoxProps {
  alt: string;
  src: string;
  title: string;
  decs: string;
  id: number;
}
const { Meta } = Card;

const MovieBox = ({ alt, src, decs, title, id }: MovieBoxProps) => {
  const navigate = useNavigate();

  const gotoDetails = (movieId: number) => {
    navigate(`/${movieId}`);
  };
  return (
    <Card
      onClick={() => gotoDetails(id)}
      className=""
      hoverable
      style={{ width: 240 }}
      cover={
        <img style={{ width: "100%", height: "300px" }} alt={alt} src={src} />
      }
    >
      <Meta title={title} description={decs} />
    </Card>
  );
};

export default MovieBox;
