import React from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import PendingTransectionList from "./pendingTransactionList";

const PendingTransection = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <PendingTransectionList />
      </div>
    </div>
  );
};

export default PendingTransection;
