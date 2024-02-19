import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import useApi from "../../../../hooks/useApi";
export default function Details() {
  const { userId, tourId, bookingId } = useParams();
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [tours, setTours] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchBookingDetails();
  }, [userId, tourId, bookingId]);

  const fetchBookingDetails = async () => {
    const bookingDetails = await api.bookingDetails(userId, tourId, bookingId);
    if (bookingDetails.tour && bookingDetails.hotel && bookingDetails.persons) {
      await setTours(bookingDetails.tour);
      await setHotels(bookingDetails.hotel);
      await setPersons(bookingDetails.persons);
      setLoading(false);
    }
  };

  return (
    <>
      <div id="invoiceholder">
        <div id="headerimage"></div>
        <div id="invoice" className="effect2">
          <div id="invoice-top">
            <div className="logo"></div>
            <div className="info-1">
              <h2>Travel & Tours</h2>
              <p>
                sahacompany@gmail.com
                <br />
                01628781323
              </p>
            </div>
            <div className="title-1">
              <h4>Invoice #1069</h4>
              <p>
                Issued: Anik Saha <br />
                Payment Due: June 27, 2015
              </p>
            </div>
          </div>

          <div id="invoice-mid">
            <div className="clientlogo"></div>
            <div className="info-1">
              <h2>Client Name</h2>
              <p>JohnDoe@gmail.com</p>
              555-555-5555
            </div>

            <div id="project">
              <h2>Tour Name</h2>
              <p>
                Life is beautiful. Sometime need refreshment so don't wait
                contact with us. We will offer your better package where you can
                enjoy
              </p>
            </div>
          </div>

          <div id="invoice-bot">
            <br />
            <div id="table">
              <h3 style={{ textAlign: "center" }}>Hotel Information</h3>
              <table>
                <tr className="tabletitle">
                  <td className="item">
                    <h2>Hotel Name</h2>
                  </td>
                  <td className="Hours">
                    <h2>Hotel Type</h2>
                  </td>
                  <td className="Rate">
                    <h2>Childern</h2>
                  </td>
                  <td className="subtotal">
                    <h2>Adult</h2>
                  </td>
                  <td className="subtotal">
                    <h2>Total Seat</h2>
                  </td>
                  <td className="subtotal">
                    <h2>Cost</h2>
                  </td>
                </tr>

                {hotels.map((hotel) => (
                  <tr className="service">
                    <td className="tableitem">
                      <p className="itemtext">{hotel.hotelName}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{hotel.hotel_type}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{hotel.childernSeat}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{hotel.adultSeat}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{hotel.totalSeat}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{hotel.cost}</p>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div id="table">
              <h3 style={{ textAlign: "center" }}>Tour Person's Information</h3>
              <table>
                <tr className="tabletitle">
                  <td className="item">
                    <h2>Person Name</h2>
                  </td>
                  <td className="item">
                    <h2>Person Address</h2>
                  </td>
                </tr>

                {persons.map((person) => (
                  <tr className="service">
                    <td className="tableitem">
                      <p className="itemtext">{person.name}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{person.address}</p>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <div id="table">
              <h3 style={{ textAlign: "center" }}>Summery</h3>
              <table>
                <tr className="tabletitle">
                  <td className="item">
                    <h2>Tour Name</h2>
                  </td>
                  <td className="Hours">
                    <h2># of Seat</h2>
                  </td>
                  <td className="Rate">
                    <h2>Tour Costing</h2>
                  </td>
                  <td className="subtotal">
                    <h2>Hotel Costing</h2>
                  </td>

                  <td className="subtotal">
                    <h2>Total Costing</h2>
                  </td>

                  <td className="Hours">
                    <h2>Sub-total</h2>
                  </td>
                </tr>

                {tours.map((tour) => (
                  <tr className="service">
                    <td className="tableitem">
                      <p className="itemtext">{tour.tour_name}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{tour.seat}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{tour.tour_costing}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{tour.hotel_costing}</p>
                    </td>

                    <td className="tableitem">
                      <p className="itemtext">{tour.total_tour_costing}</p>
                    </td>
                    <td className="tableitem">
                      <p className="itemtext">{tour.total_costing}</p>
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            <form action="" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="QRZ7QTM9XRPJ6"
              />
              <input
                type="image"
                src="http://michaeltruong.ca/images/paypal.png"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
            </form>

            <div id="legalcopy">
              <p className="legal">
                <strong>Thank you for your business!</strong>  Payment is
                expected within 31 days; please process this invoice within that
                time. There will be a 5% interest charge per month on late
                invoices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
