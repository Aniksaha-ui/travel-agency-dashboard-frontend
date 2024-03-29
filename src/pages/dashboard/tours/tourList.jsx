import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../hooks/useApi";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";


const Datatable = () => {
  const [data, setData] = useState([]);
  const api = useApi();
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
   const tourColumns = [
    { field: "id", headerName: "Tour Id", width: 100 },
    {
        field: "code",
        headerName: "Tour Code",
        width: 100,
      },
      {
        field: "tour_name",
        headerName: "Tour Name",
        width: 250,
      },
      
      {
        field: "original_costing",
        headerName: "Orginal Cost",
        width: 120,
      },
      {
        field: "cost",
        headerName: "Cost",
        width: 120,
      },
      {
        field: "starting_date",
        headerName: "Tour start date",
        width: 200,
        renderCell:(params)=> (
          <p>{moment(params.row.starting_date).format('MM/DD/YYYY')}</p>  
       )
      },
      {
        field: "end_date",
        headerName: "Tour end date",
        width: 200,
        renderCell:(params)=> (
            <p>{moment(params.row.end_date).format('MM/DD/YYYY')}</p>  
        )
      }
  ];
  

  useEffect(()=>{
    fetchTours()
  },[]);

  const fetchTours = async ()=>{
    const tourList = await api.getTour();
    if(tourList && tourList.length > 0){
        await setData(tourList);
        setLoading(false);
    } else {

    }
  }
  
  if(loading){
    return (
      <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'center' }}>
        <CircularProgress />
    </Box>
);
  }

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleItem =(tourId)=>{
      navigate(`${tourId}`);
  }

  const fetchTourWiseBooking = async(tourId)=>{
    navigate(`/tours/bookings/${tourId}`);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
              <div onClick={()=>handleItem(params.row.id)} className="viewButton">View</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>

            <div
              className="deleteButton"
              onClick={() => fetchTourWiseBooking(params.row.id)}
            >
              Bookings
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
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={tourColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
