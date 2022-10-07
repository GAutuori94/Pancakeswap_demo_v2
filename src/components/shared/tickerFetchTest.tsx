/* eslint-disable react/jsx-key */
import React from "react";
import { TickerModel } from "../../types/tickerModelTypes";
import { useTicker } from "../context/tickerContext";


export function ResponseRender(){
    return <TickerRender />
}

export default function TickerRender() {

    const {dataFetchedLoading, dataFetchedError, dataFetched} = useTicker()


    return (
        <div className="">
            {(dataFetchedLoading) && <h1>Loading ...</h1>}
            {(dataFetchedError) && <h1>Errore nel fetch ...</h1>}
            {dataFetched?.map((item) => <TickerItem item={item}/>)}
        </div>
    )
}



export function TickerItem ({item}: {item: TickerModel}) {

    return (
        <>
            <div className="" >
                <h1>{item.symbol}</h1>
                <h1>{item.highPrice}</h1>
                <h1>{item.lowPrice}</h1>
            </div>
        </>
    )
}

