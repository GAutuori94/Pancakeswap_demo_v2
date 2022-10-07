import React from 'react'
import { Routes, Route } from "react-router-dom";
import { VerticalCarousel } from './components/pages/home/verticalCarousel';

export default function Router () {
    return (
    <Routes>
        <Route path='vertical-carousel' element={<VerticalCarousel />} />
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
    )
}
