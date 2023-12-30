import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
const New = ({ inputs, title }) => {
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
          {/* <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
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
                    label="Required"
                    inputRef={userNameRef}
                  />
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                  />
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                  />
                  <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                  />
                  <TextField
                    disabled
                    id="filled-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="filled"
                  />
                  <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                  />
                  <TextField
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                  />
                  <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                  />
                </div>
                <div>
                  <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="standard"
                  />
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

export default New;
