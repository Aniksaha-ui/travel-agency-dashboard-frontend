import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import HotelList from "./hotelList";

const Hotels = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <HotelList />
      </div>
    </div>
  );
};

export default Hotels;
