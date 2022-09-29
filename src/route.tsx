import React from "react";
import { Routes, Route } from "react-router-dom";
// import { ResponseRender } from './components/shared/fetchTest';
import Home from "./components/pages/home";
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='fetched-data' element={<ResponseRender />} /> */}
      {/* <Route path='/swap' element={<Swap />} />
            <Route path='/limit' element={<Limit />} />
            <Route path='/liquidity' element={<Liquidity />} />
        </Route>
        <Route path='earn' element={<Earn />}>
            <Route path='/farms' element={<Farms />} />
            <Route path='/pools' element={<Pools />} />
        </Route>
        <Route path='win' element={<Win />}>
            <Route path='/tradingcompetition' element={<TradingCompetition />} />
            <Route path='/prediction' element={<Prediction />} />
            <Route path='/lottery' element={<Lottery />} />
        </Route>
        <Route path='nft' element={<Nft />}>
            <Route path='/overwiev' element={<Overwiev />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/activity' element={<Activity />} />
        </Route> */}
    </Routes>
  );
}
