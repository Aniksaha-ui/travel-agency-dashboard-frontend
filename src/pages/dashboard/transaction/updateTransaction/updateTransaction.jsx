import "./update.scss";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';

const UpdateTransaction = () => {
  const {tourId} = useParams();
  console.log(tourId,"params");
  const userNameRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    console.log(userName);
  };

  const top100Films = [
    { label: "Upcomeing", value: "Upcomeing" },
    { label: "Complete", value: "Complete" },
  ];

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 style={{textAlign: 'center'}}>Update Transaction History</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "38ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
             
                  <TextField
                    required
                    id="outlined-required"
                    label="Remarks"
                    inputRef={userNameRef}
                  />

                  <TextField
                    required
                    id="outlined-required"
                    label="Status"
                    inputRef={userNameRef}
                  />
                 
                </div>
              </Box>

       

              <button>Update Status</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTransaction;
