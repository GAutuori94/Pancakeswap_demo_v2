import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./route";
import { SymbolsContextProvider } from "./components/context/symbolsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SymbolsContextProvider>
        <Router />
      </SymbolsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
