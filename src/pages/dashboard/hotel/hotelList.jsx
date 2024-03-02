import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../hooks/useApi";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";

const HotelList = () => {
  const [data, setData] = useState([]);
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const hotelColumns = [
    {
      field: "hotel_name",
      headerName: "Hotel Name",
      width: 250,
    },
    {
      field: "hotel_type",
      headerName: "Hotel Type",
      width: 250,
    },

    {
      field: "roomNo",
      headerName: "Room Number",
      width: 120,
    },

    {
      field: "childernSeat",
      headerName: "Childern Seat",
      width: 120,
    },

    {
      field: "adultSeat",
      headerName: "Adult Seat",
      width: 120,
    },

    {
      field: "totalSeat",
      headerName: "Total Seat",
      width: 120,
    },

    {
      field: "cost",
      headerName: "Cost",
      width: 120,
    },
    {
      field: "freeAfter",
      headerName: "Created Date",
      width: 200,
      renderCell: (params) => (
        <p>{moment(params.row.freeAfter).format("MM/DD/YYYY")}</p>
      ),
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      width: 200,
      renderCell: (params) => (
        <p>{moment(params.row.createdAt).format("MM/DD/YYYY")}</p>
      ),
    },
  ];

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    const tourList = await api.getAllHotels();
    if (tourList && tourList.length > 0) {
      await setData(tourList);
      setLoading(false);
    } else {
    }
  };

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleItem = (tourId) => {
    navigate(`${tourId}`);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              onClick={() => handleItem(params.row.id)}
              className="viewButton"
            >
              View
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/hotels/add" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default HotelList;
