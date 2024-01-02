import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { RecoilRoot } from "recoil";

ReactDOM.render(

  <React.Fragment>
    <RecoilRoot>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
   </RecoilRoot>
   </React.Fragment>,
  document.getElementById("root")
);
