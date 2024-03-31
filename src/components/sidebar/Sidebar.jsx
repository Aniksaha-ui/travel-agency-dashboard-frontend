import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import HotelTwoToneIcon from "@mui/icons-material/HotelTwoTone";
import FestivalTwoToneIcon from "@mui/icons-material/FestivalTwoTone";
import BookOnlineTwoToneIcon from "@mui/icons-material/BookOnlineTwoTone";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AccountBalance, AccountTree } from "@mui/icons-material";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Tour Management</p>
          <Link to="/tours" style={{ textDecoration: "none" }}>
            <li>
              <FestivalTwoToneIcon className="icon" />
              <span>Tours</span>
            </li>
          </Link>

          <p className="title">Hotel Management</p>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <HotelTwoToneIcon className="icon" />
              <span>Hotels Information</span>
            </li>
          </Link>

          <p className="title">Transection Management</p>
          <Link to="/trnx/approved" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Approved Transection</span>
            </li>
          </Link>
          <Link to="/trnx/pending" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Pending Transection</span>
            </li>
          </Link>
          <Link to="/trnx/reject" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Reject Transection</span>
            </li>
          </Link>

          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">Booking Management</p>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <BookOnlineTwoToneIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>

          <p className="title">Account Management</p>
          <Link to="/accounts" style={{ textDecoration: "none" }}>
            <li>
              <AccountTree className="icon" />
              <span>Accounts</span>
            </li>
          </Link>
          <Link to="/deposite" style={{ textDecoration: "none" }}>
            <li>
              <AccountBalance className="icon" />
              <span>Bank Deposite</span>
            </li>
          </Link>
          <p className="title">Tour Report</p>
          <li>
            <Link to="/tours/batchwiseperson" style={{ textDecoration: "none" }}>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Batch Wise Person List</span>
            </Link>
          </li>
          <li>
          <Link to="/accounts" style={{ textDecoration: "none" }}>
            <PsychologyOutlinedIcon className="icon" />
            <span>Tour Wise Revenue</span>
          </Link>
          </li>
          <li>
          <Link to="" style={{ textDecoration: "none" }}>
            <SettingsApplicationsIcon className="icon" />
            <span>Tourwise Selling Report</span>
          </Link>
          </li>
          <p className="title">Accounting Report</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
