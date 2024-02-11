import React from "react";

import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import BookingList from "./bookingList";

const Bookings = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <BookingList />
      </div>
    </div>
  );
};

export default Bookings;
