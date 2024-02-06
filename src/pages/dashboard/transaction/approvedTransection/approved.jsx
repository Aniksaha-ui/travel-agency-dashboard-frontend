import React from "react";
import { userInformationAtom } from "../../../../states/common";
import { useRecoilState } from "recoil";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import ApprovedTransectionList from "./approvedTransectionList";

const ApprovedTransection = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ApprovedTransectionList />
      </div>
    </div>
  );
};

export default ApprovedTransection;
