import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Index from "./pages/dashboard/tours";
import TourDetails from "./pages/dashboard/tours/details/TourDetails";
import AddTour from "./pages/dashboard/tours/add/addTour";
import ApprovedTransection from "./pages/dashboard/transaction/approvedTransection/approved";
import PendingTransection from "./pages/dashboard/transaction/pendingTransaction/pending";
import RejectTransection from "./pages/dashboard/transaction/rejectTransaction/reject";
import UpdateTransaction from "./pages/dashboard/transaction/updateTransaction/updateTransaction";
import Bookings from "./pages/dashboard/bookings/allBookings/bookings";
import Details from "./pages/dashboard/bookings/details/details";
import TourBookings from "./pages/dashboard/tours/bookings/TourBookings";
import Hotels from "./pages/dashboard/hotel";
import AddHotel from "./pages/dashboard/hotel/add/addHotels";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="tours">
              <Route path="bookings/:tourId" element={<TourBookings />} />

              <Route index element={<Index />} />
              <Route path=":tourId" element={<TourDetails />} />
              <Route
                path="add"
                element={<AddTour inputs={userInputs} title="Add New Tour" />}
              />
            </Route>

            <Route path="trnx">
              <Route index element={<ApprovedTransection />} />
              <Route path="approved" element={<ApprovedTransection />} />
              <Route path="pending" element={<PendingTransection />} />
              <Route path="reject" element={<RejectTransection />} />
              <Route
                path="add"
                element={<AddTour inputs={userInputs} title="Add New Tour" />}
              />
              <Route path="new" element={<AddTour title="Add New Product" />} />
              <Route path="update/:trnxId" element={<UpdateTransaction />} />
            </Route>

            <Route path="bookings">
              <Route index element={<Bookings />} />
              <Route path=":tourId/:bookingId/:userId" element={<Details />} />
            </Route>
            <Route path="hotels">
              <Route index element={<Hotels />} />
              <Route
                path="add"
                element={<AddHotel inputs={userInputs} title="Add New Tour" />}
              />
              {/* <Route path=":tourId/:bookingId/:userId" element={<Details />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
