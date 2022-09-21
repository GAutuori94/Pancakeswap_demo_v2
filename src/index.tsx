import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./route";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
