import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../../hooks/useApi";
import { Box, Button, CircularProgress } from "@mui/material";

const BookingList = () => {
  const [bookings, setBooking] = useState([]);
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleBookingDetails = (tourId,bookingId,userId) =>{
      navigate(`/bookings/${tourId}/${bookingId}/${userId}`);
  }


  const bookingColumns = [
    { field: "id", headerName: "Booking Id", width: 100 },
    {
      field: "tourName",
      headerName: "Tour Name",
      width: 140,
    },
    {
      field: "name",
      headerName: "Customer Name",
      width: 140,
    },
    {
      field: "email",
      headerName: "Customer Email",
      width: 140,
    },
    {
      field: "cost",
      headerName: "Costing",
      width: 140,
    },
    {
      field: "orginal_cost",
      headerName: "Orginal Costing",
      width:150,
    },
    {
      field: "userId",
      headerName: "User Id",
      width: 140,
    },
    {
      field: "seat",
      headerName: "Number of seat",
      width: 140,
    },
    {
        field: "createdAt",
        headerName: "Transaction Date",
        width: 200,
      },
  ];


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <Button onClick={()=>handleBookingDetails(params.row.tourId,params.row.id,params.row.userId)}  color="primary" variant='contained'>update</Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    fetchBookingList();
  }, []);

  const fetchBookingList = async () => {
    const bookingList = await api.getAllBooking();
    if (bookingList && bookingList.length > 0) {
      await setBooking(bookingList);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  if (loading) {
    return (
            <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center' }}>
              <CircularProgress />
          </Box>
    );
  }

  return (
    <div className="datatable">
      <div className="datatableTitle"></div>
      <DataGrid
        className="datagrid"
        rows={bookings}
        columns={bookingColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default BookingList;
