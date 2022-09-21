import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
// import { Test } from "./components/animation/test";
import Home from "./components/pages/home/index";
=======
import { ResponseRender } from './components/shared/fetchTest';
>>>>>>> develop

export default function Router() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />} />
      {/* <Route path="animation" element={<Test />}></Route> */}
      {/* <Route path='trade' element={<Trade />}>
=======
        <Route path='fetched-data' element={<ResponseRender />} />
        {/* <Route path='trade' element={<Trade />}>
>>>>>>> develop
            <Route path='/swap' element={<Swap />} />
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
<<<<<<< HEAD
  );
=======
    )
>>>>>>> develop
}
