import "../../../../common/css/form.css";
import * as React from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import {  useNavigate } from "react-router-dom";
import { Card } from "@mui/material";
import useApi from "../../../../hooks/useApi";
import { useState } from "react";
import Papa from 'papaparse'
import List from "../../../../components/table/Table";
const AddDefaultHotelAccounts = () => {
  const api = useApi();

  const [account,setAccount] = useState([])
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(account,"account")
    e.preventDefault();
    const newAccounts = await api.addDefaultHotelAccount(account)
    if(newAccounts){
        navigate("/defaulthotelaccount");
    }
  };

  const handleFileUpload = async (e)=>{
    const file = e.target.files[0];
    Papa.parse(file,{
        header: true,
        complete: async (result) =>{
            const length = await result.data.length;
            const account = await result.data.slice(0,length-1);
            await setAccount(account);
            console.log(account)
        }
    })
  }

  return (
    <div className="new">
      <Sidebar />
      <div className=" newContainer formbold-main-wrapper">
        <Card>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              padding: "10px",
              background: "teal",
            }}
          >
            Account Information Form(Bulk Upload)
          </h3>
          <hr />
          <div className="formbold-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="formbold-input-group">
                <label  className="formbold-form-label">
                  Uploaded Information
                </label>
                <input
                  type="file"
                  accept=".csv"
                  id="name"
                  placeholder="Transaction Number"
                  className="formbold-form-input"
                  onChange={handleFileUpload}
                />
              </div>


              <button type="submit" className="formbold-btn">
                Submit
              </button>
            </form>
          </div>
        </Card>
        
        {account.length >0 && 
          <Card style={{ marginLeft: "30px" }}>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              padding: "10px",
              background: "teal",
            }}
          >
            Uploaded Information
          </h3>
          <hr />
          <List data={account}/>
        </Card>
        }
      
      </div>
    </div>
  );
};

export default AddDefaultHotelAccounts;
