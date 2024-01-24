import "./addTour.scss";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Box from "@mui/material/Box";
import { useRef } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Autocomplete, Input, TextareaAutosize } from "@mui/material";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddTour = ({ title }) => {
  const [file, setFile] = useState("");
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
          <h1>{title}</h1>
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
                    label="Tour Name"
                    inputRef={userNameRef}
                  />
                  <TextField id="outlined-disabled" label="Tour Code" />
                  <TextField id="outlined-password-input" label="Guide Id" />
                  <TextField
                    id="outlined-read-only-input"
                    label="Available Seat"
                  />
                </div>
                <div>
                  <TextField id="outlined-number" label="Orginal Costing" />
                  <TextField id="outlined-search" label="Customer Cost" />
                  <TextField
                    type="date"
                    id="outlined-number"
                    label="Starting Date"
                  />
                  <TextField type="date" label="End Date" />
                  <TextField type="text" label="Number of day" />

                  <TextField type="text" label="Status" />
                  <TextField type="text" label="Image Link" />
                  <CKEditor />
                </div>
              </Box>
              {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from the first editor working with the context!</p>"
                />
              </Box> */}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTour;
