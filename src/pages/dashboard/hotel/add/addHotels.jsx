import { useState } from "react";
import * as React from "react";
import { useRef } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import { Card } from "@mui/material";
import { Api, Hotel } from "@mui/icons-material";
import useApi from "../../../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const AddHotel = ({ title }) => {
  const imageStorageKey = "4295ac4d47b569312bea67b440cdbdbb";
  const navigate = useNavigate();
  const api = useApi();
  const [file, setFile] = useState(null);
  const [totalSeat, setTotalSeat] = useState(0);
  const [childernSeat, setChildernSeat] = useState(0);
  const [adultSeat, setAdultSeat] = useState(0);

  React.useEffect(() => {
    const childernSeatValue = parseInt(childernSeat) || 0;
    const adultSeatValue = parseInt(adultSeat) || 0;
    setTotalSeat(childernSeatValue + adultSeatValue);
  }, [childernSeat, adultSeat]);

  const handleChildernSeatChange = (e) => {
    setChildernSeat(e.target.value);
  };

  const handleAdultSeatChange = (e) => {
    setAdultSeat(e.target.value);
  };

  const hotelNameRef = useRef("");
  const hotelTypeRef = useRef("");
  const roomNoRef = useRef("");
  const childernSeatRef = useRef("");
  const adultSeatRef = useRef("");
  const totalSeatRef = useRef("");
  const costRef = useRef("");
  const freeAfterRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const hotel = {};
    hotel.hotel_name = hotelNameRef.current.value;
    hotel.hotel_type = hotelTypeRef.current.value;
    hotel.roomNo = roomNoRef.current.value;
    hotel.childernSeat = childernSeatRef.current.value;
    hotel.adultSeat = adultSeatRef.current.value;
    hotel.totalSeat = totalSeat;
    hotel.cost = costRef.current.value;
    hotel.freeAfter = freeAfterRef.current.value;
    hotel.action = "insert";
    hotel.status = "free";

    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          hotel.image = result.data.url;
          const hotelInformation = api.addHotel(hotel);
          if (hotelInformation) {
            navigate("/hotels");
          }
        }
      });
  };

  const top100Films = [
    { label: "Upcomeing", value: "Upcomeing" },
    { label: "Complete", value: "Complete" },
  ];

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer formbold-main-wrapper">
        <Card>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              padding: "10px",
              background: "teal",
            }}
          >
            Add New Hotel Information
          </h3>
          <hr />
          <div className="formbold-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Hotel Name"
                  ref={hotelNameRef}
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Hotel Type
                </label>
                <input
                  type="text"
                  ref={hotelTypeRef}
                  id="hotel_type"
                  placeholder="Hotel Type"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Room No
                </label>
                <input
                  ref={roomNoRef}
                  type="text"
                  id="roomNo"
                  placeholder="Room Number"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Image URL
                </label>
                <input
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  type="file"
                  id="image"
                  placeholder="Image Url"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Childern Seat
                </label>
                <input
                  value={childernSeat}
                  onChange={handleChildernSeatChange}
                  ref={childernSeatRef}
                  type="text"
                  id="childernSeat"
                  placeholder="Childern Seat"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Adult Seat
                </label>
                <input
                  value={adultSeat}
                  onChange={handleAdultSeatChange}
                  ref={adultSeatRef}
                  type="text"
                  id="adultSeat"
                  placeholder="Childern Seat"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Total Seat
                </label>
                <input
                  value={
                    parseInt(
                      adultSeatRef.current.value + childernSeatRef.current.value
                    ) > 0
                      ? parseInt(adultSeatRef.current.value) +
                        parseInt(childernSeatRef.current.value)
                      : 0
                  }
                  type="text"
                  id="totalSeat"
                  placeholder="Total Seat"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Cost
                </label>
                <input
                  ref={costRef}
                  type="text"
                  id="cost"
                  placeholder="Total Seat"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label htmlFor="free after" className="formbold-form-label">
                  Free after
                </label>
                <input
                  ref={freeAfterRef}
                  type="date"
                  id="cost"
                  placeholder="Free After"
                  className="formbold-form-input"
                />
              </div>

              <button type="submit" className="formbold-btn">
                Submit
              </button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AddHotel;
