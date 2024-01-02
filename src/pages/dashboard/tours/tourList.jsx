import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import useApi from "../../../hooks/useApi";


const Datatable = () => {
  const [data, setData] = useState([]);
  const api = useApi();
  const [loading,setLoading] = useState(true);

   const userColumns = [
    { field: "tour_id", headerName: "Tour Name", width: 70 },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   width: 230,
    // },
  
    // {
    //   field: "age",
    //   headerName: "Age",
    //   width: 100,
    // },

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
    return "loading......"
  }



  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
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
        <Link to="/users/new" className="link">
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

export default Datatable;
