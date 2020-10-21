import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Only one component App can be called
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

