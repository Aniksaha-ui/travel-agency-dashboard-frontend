import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import HotelCommisionDefaultAccountList from "./hotelCommisionDefaultAccount";

const HotelDefaultAccount = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <HotelCommisionDefaultAccountList />
      </div>
    </div>
  );
};

export default HotelDefaultAccount;
