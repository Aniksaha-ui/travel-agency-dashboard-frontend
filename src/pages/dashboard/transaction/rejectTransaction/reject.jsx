import React from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import RejectTransectionList from "./rejectTransactionList";

const RejectTransection = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <RejectTransectionList />
      </div>
    </div>
  );
};

export default RejectTransection;
