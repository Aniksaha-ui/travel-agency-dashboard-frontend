import "./TourDetailssingle.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import Chart from "../../../../components/chart/Chart";
import List from "../../../../components/table/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useApi from "../../../../hooks/useApi";
import moment from "moment";

const TourDetails = () => {

  const [tourInfo,setTourInfo] = useState({});
  const [trnx,setTrnx] = useState([]);
  const [data,setData] = useState([]);
  const params = useParams();
  const {tourId} = params;
  const api = useApi();

  useEffect(()=>{
    fetchTourInformationById(tourId);
  },[trnx]);

  const fetchTourInformationById =async(id)=>{
    const tourList = await api.getTourById(id);
    if(tourList.tour && tourList.transections){
      await setTourInfo(tourList.tour[0]);
      await setTrnx(tourList.transections);
     
    }
    const chartData =await trnx.map(trx=>{
      return {name: trx.cardholdername,amount:trx.amount}
    });
    await setData(chartData);
  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={tourInfo.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{tourInfo.tour_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Tour Start Date : </span>
                  <span className="itemValue">{moment(tourInfo.starting_date).format('MM/DD/YYYY')}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tour End date : </span>
                  <span className="itemValue">{moment(tourInfo.starting_date).format('MM/DD/YYYY')}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Short Description : </span>
                  <span className="itemValue">
                    {tourInfo.short_description}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Available Seat:</span>
                  <span className="itemValue">{tourInfo.available_seat}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart info={trnx} aspect={3 / 1} title="User Spending ( Last 3 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List data={trnx}/>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
