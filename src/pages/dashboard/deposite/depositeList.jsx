import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../hooks/useApi";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";



const DepositeList = () => {
  const [data, setData] = useState([]);
  const api = useApi();
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
   const depositeColumns = [
    { field: "id", headerName: "SL", width: 100 },
    {
        field: "customer_card_no",
        headerName: "Card No",
        width: 250,
      },
      {
        field: "amount",
        headerName: "Amount",
        width: 250,
      },
      
      {
        field: "bankName",
        headerName: "Bank Name",
        width: 250,
      },
      {
        field: "purpose",
        headerName: "Purpose",
        width: 250,
      },
      {
        field: "remarks",
        headerName: "Remarks",
        width: 250,
      },
      {
        field: "createdAt",
        headerName: "Created on",
        width: 250,
        renderCell:(params)=> (
            <p>{moment(params.row.createdAt).format('MM/DD/YYYY')}</p>  
        )
      }
  ];
  

  useEffect(()=>{
    fetchTours()
  },[]);

  const fetchTours = async ()=>{
    const depositeList = await api.getAllDeposite();
    if(depositeList && depositeList.length > 0){
        await setData(depositeList);
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
      
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={depositeColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default DepositeList;
