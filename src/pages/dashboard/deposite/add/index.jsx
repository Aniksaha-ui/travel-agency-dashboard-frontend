import React from "react";
import DepositeList from "../depositeList";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";

const Deposite = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DepositeList />
      </div>
    </div>
  );
};

export default Deposite;
