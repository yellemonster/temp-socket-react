import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//
import Context from "./_context/MainContext";
//
import "./index.css";
//
ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
