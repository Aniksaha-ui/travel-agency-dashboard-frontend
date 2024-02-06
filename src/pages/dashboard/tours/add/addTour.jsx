import "./addTour.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const AddTour = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const userNameRef = useRef(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    console.log(userName);
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    label="Tour Name"
                    placeholder="Enter Tour Name"
                    
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Tour Code"
                    placeholder="Enter tour code"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Available seat"
                    placeholder="Enter available seat"
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Tour Original Costing"
                    placeholder="Enter original costing"
                  />
                  <TextField
                    id="outlined-number"
                    label="Customer Cost"
                    type="number"
                    placeholder="Enter customer cost"
                  />
                  <TextField
                    id="outlined-search"
                    label="# of days"
                    placeholder="No of days"
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Enter Guide id"
                    placeholder="Enter guide id"
                  />
                </div>
              
                <div>
                {/* <DatePicker label="disabled" disabled /> */}

                  <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="standard"
                  />
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />
                  <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="standard"
                  />
                  <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                  />
                  <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="standard"
                  />
                </div>
              </Box>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTour;
