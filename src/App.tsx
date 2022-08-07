import React from "react";
import { DatePicker } from "antd";
import Home from "./Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails/MovieDetails";
import Text from "./Text";
import SeatList from "./SeatMovie/SeatList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home></Home>}></Route>
          <Route
            path=":movieId"
            element={<MovieDetails></MovieDetails>}
          ></Route>
          <Route path="seatList/:getSeatId" element={<SeatList></SeatList>}></Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
