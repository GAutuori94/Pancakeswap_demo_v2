import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./route";
import { SymbolsContextProvider } from "./components/context/symbolsContext";
import "./style/index.css";
import { KlineContextProvider } from "./components/context/klineContext";
import { TickerContextProvider } from "./components/context/tickerContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SymbolsContextProvider>
        <TickerContextProvider>
          <KlineContextProvider>
            <Router />
          </KlineContextProvider>
        </TickerContextProvider>
      </SymbolsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
