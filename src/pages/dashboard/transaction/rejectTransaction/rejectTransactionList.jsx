import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import useApi from "../../../../hooks/useApi";
import { Box, CircularProgress } from "@mui/material";

const RejectTransectionList = () => {
  const [transaction, setTransaction] = useState([]);
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const transectionColumns = [
    { field: "id", headerName: "SL", width: 100 },
    {
      field: "bankname",
      headerName: "Bank Name",
      width: 100,
    },
    {
      field: "cardNo",
      headerName: "Card No",
      width: 120,
    },

    {
      field: "cardholdername",
      headerName: "Card Holder Name",
      width:150,
    },
    {
      field: "cardtype",
      headerName: "Card Type",
      width: 120,
    },
    {
      field: "cvv",
      headerName: "CVV",
      width: 120,
    },
    {
      field: "exp",
      headerName: "EXP Date",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "createdAt",
      width: 200,
      renderCell: (params) => (
        <p>{moment(params.row.createdAt).format("MM/DD/YYYY")}</p>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => (
        <p>{params.row.status === "r" ? "Reject" : "N/A"}</p>
      ),
    },
  ];

  useEffect(() => {
    fetchPendingTransaction();
  }, []);

  const fetchPendingTransaction = async () => {
    const transactionList = await api.getRejectTransaction();
    if (transactionList && transactionList.length > 0) {
      await setTransaction(transactionList);
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
        rows={transaction}
        columns={transectionColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default RejectTransectionList;
