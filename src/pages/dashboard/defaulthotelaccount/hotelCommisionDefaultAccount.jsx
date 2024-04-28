import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../hooks/useApi";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";


const HotelCommisionDefaultAccountList = () => {
  const [data, setData] = useState([]);
  const api = useApi();
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
   const hotelDefaultCommisionColumns = [
    {
      field: "hotelId",
      headerName: "Id",
      width: 100,
    },
    {
        field: "hotel_name",
        headerName: "Hotel Name",
        width: 550,
      },
      {
        field: "cardNo",
        headerName: "Card No",
        width: 550,
      }
  ];
  

  useEffect(()=>{
    fetchHotelCommisionDefaultAccounts()
  },[]);

  const fetchHotelCommisionDefaultAccounts = async ()=>{
    const hotelCommisionDefaultList = await api.getHotelCommisionDefaultAccount();
    if(hotelCommisionDefaultList && hotelCommisionDefaultList.length > 0){
        await setData(hotelCommisionDefaultList);
        setLoading(false);
    } else {
        setData([]);
        setLoading(false)
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
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Hotel Default Accounts List
        <Link to="/defaulthotelaccount/add" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={hotelDefaultCommisionColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default HotelCommisionDefaultAccountList;
