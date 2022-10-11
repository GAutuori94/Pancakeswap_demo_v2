import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  FullButton,
  OnlyBorderButton,
  VoidButton,
} from "./components/shared/buttons";
import { ResponseRender } from "./components/shared/fetchTest";
import { GraphIntervalsToggleButton } from "./components/shared/toggleButtons";
import { BannerHero } from "./components/pages/home/BannerHero";
export default function Router() {
  return (
    <Routes>
      <Route path="fetched-data" element={<ResponseRender />} />
      {/* <Route path="/button1" element={<FullButton />} />
      <Route path="/button2" element={<VoidButton />} />
      <Route path="/button3" element={<OnlyBorderButton />} /> */}
      <Route
        path="/togglebuttongraph"
        element={<GraphIntervalsToggleButton />}
      />
      <Route path="/banner" element={<BannerHero />} />
      {/* <Route path='trade' element={<Trade />}>
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
  );
}
