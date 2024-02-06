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
              <Route index element={<Index />} />
              <Route path=":tourId" element={<TourDetails />} />
              <Route
                path="add"
                element={<AddTour inputs={userInputs} title="Add New Tour" />}
              />
            </Route>

            <Route path="trnx">
              <Route index element={<ApprovedTransection/>} />
              <Route path=":tourId" element={<TourDetails />} />
              <Route
                path="add"
                element={<AddTour inputs={userInputs} title="Add New Tour" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
