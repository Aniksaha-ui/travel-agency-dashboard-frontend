import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../hooks/useApi";
import moment from "moment";
import { Box, CircularProgress } from "@mui/material";


const AccountList = () => {
  const [data, setData] = useState([]);
  const api = useApi();
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();
   const userColumns = [
    { field: "id", headerName: "Tour Id", width: 100 },
    {
        field: "accountNo",
        headerName: "Account No",
        width: 250,
      },
      {
        field: "cardNo",
        headerName: "Card No",
        width: 250,
      },
      
      {
        field: "bankName",
        headerName: "Bank Name",
        width: 250,
      },
      {
        field: "responsiablePerson",
        headerName: "Responsible Person",
        width: 250,
      },
      {
        field: "branch",
        headerName: "Branch Name",
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
    const accountList = await api.getAllAccounts();
    if(accountList && accountList.length > 0){
        await setData(accountList);
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
        Add New Account
        <Link to="/accounts/add" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default AccountList;
