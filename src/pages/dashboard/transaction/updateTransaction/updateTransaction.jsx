import "../../../../common/css/form.css";
import * as React from "react";
import { useRef } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@mui/material";
import { useEffect } from "react";
import useApi from "../../../../hooks/useApi";
import { useState } from "react";
import moment from "moment";

const UpdateTransaction = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [trnxInfo, setTrnxInfo] = useState({});

  const { trnxId } = useParams();
  const trnxIdRef = useRef("");
  const statusRef = useRef("");
  const remarksRef = useRef("");

  useEffect(() => {
    loadTransactionInformation();
  }, []);

  const loadTransactionInformation = async () => {
    const transectionInfo = await api.getTransactionById(trnxId);
    if (transectionInfo.length > 0) {
      setTrnxInfo(transectionInfo[0]);
    }
    console.log(trnxInfo, "iunfo");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const transectionId = trnxIdRef.current.value;
    const status = statusRef.current.value;
    const remarks = remarksRef.current.value;
    const information = { id: transectionId, status: status, remarks: remarks };
    const updateTransaction = await api.updateTransactionStatus(information);
    if (updateTransaction === true) {
      navigate("/trnx");
    }
  };

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
            Status Update form
          </h3>
          <hr />
          <div className="formbold-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="formbold-input-group">
                <label htmlFor="trnxId" className="formbold-form-label">
                  Transaction Number
                </label>
                <input
                  ref={trnxIdRef}
                  type="text"
                  id="name"
                  disabled
                  value={trnxId}
                  placeholder="Transaction Number"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-input-group">
                <label className="formbold-form-label">
                  Transaction Status
                </label>
                <select
                  ref={statusRef}
                  className="formbold-form-select"
                  id="occupation"
                >
                  <option value="a">Approved</option>
                  <option value="designer">Reject</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="formbold-form-label">
                  Remarks
                </label>
                <textarea
                  ref={remarksRef}
                  rows="6"
                  id="message"
                  placeholder="Type here..."
                  className="formbold-form-input"
                ></textarea>
              </div>

              <button type="submit" className="formbold-btn">
                Submit
              </button>
            </form>
          </div>
        </Card>

        <Card style={{ marginLeft: "30px" }}>
          <h3
            style={{
              color: "white",
              textAlign: "center",
              padding: "10px",
              background: "teal",
            }}
          >
            Transaction Information
          </h3>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "400px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <p>Card Holder Name : {trnxInfo.cardholdername}</p>
            <p>Card No : {trnxInfo.cardNo}</p>
            <p>Card EXP : {trnxInfo.exp}</p>
            <p>Card Type : {trnxInfo.cardType}</p>
            <p>Amount : {trnxInfo.amount}</p>
            <p>Date : {moment(trnxInfo.createdAt).format("DD-MM-YYYY")}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpdateTransaction;
