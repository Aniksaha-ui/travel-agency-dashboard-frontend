import React from "react";
import TourWisePersonList from "./tourWisePersonList";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import Navbar from "../../../../../components/navbar/Navbar";
const TourWisePerson = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <TourWisePersonList />
      </div>
    </div>
  );
};

export default TourWisePerson;
