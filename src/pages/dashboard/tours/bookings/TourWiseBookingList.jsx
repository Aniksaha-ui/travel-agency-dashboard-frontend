import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useApi from "../../../../hooks/useApi";
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';

export default function TourWiseBookingList() {
  const [bookingList,setBookingList] = useState([]);
  const {tourId} = useParams();
  const api = useApi();
    
  useEffect(()=>{
    fetchTourBookings(tourId);
  },[]);


  const fetchTourBookings = async(tourId) =>{
    const tourWiseBookingInformation = await api.tourWiseBookingInfomation(tourId);
    if(tourWiseBookingInformation.length > 0)
        await setBookingList(tourWiseBookingInformation);
    console.log(tourWiseBookingInformation,"reponse");
  }

  const tourColumns = [
    { field: "username", headerName: "User Name", width: 350},
  
      {
        field: "orginal_cost",
        headerName: "Orginal Cost",
        width: 350,
      },
      
      {
        field: "cost",
        headerName: "Costing",
        width: 350,
      },
      {
        field: "seat",
        headerName: "# of seat",
        width: 350,
      },
  ];
  
  const actionColumn = []

  return (
    <div className="datatable">
    <div className="datatableTitle">
      Add New User
      <Link to="/users/new" className="link">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={bookingList}
      columns={tourColumns}
      pageSize={9}
      rowsPerPageOptions={[9]}
    />
  </div>
  )
}
