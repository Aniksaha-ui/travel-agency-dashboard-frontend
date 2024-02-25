import React from 'react'
import Sidebar from '../../../../components/sidebar/Sidebar'
import Navbar from '../../../../components/navbar/Navbar'
import TourWiseBookingList from './TourWiseBookingList'

export default function TourBookings() {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <TourWiseBookingList/>
    </div>
  </div>
  )
}
