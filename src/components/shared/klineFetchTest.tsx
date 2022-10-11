/* eslint-disable react/jsx-key */
import React from "react";
import { ParsedBinanceKline } from "../../types/klineModelTypes";
import { useKline } from "../context/klineContext";


export function KlineResponseRender(){
    return <KlineRender />
}

export default function KlineRender() {

    const {dataFetchedLoading, dataFetchedError, parsedData} = useKline()


    return (
        <div className="">
            {(dataFetchedLoading) && <h1>Loading ...</h1>}
            {(dataFetchedError) && <h1>Errore nel fetch ...</h1>}
            {parsedData.map((item) => <KlineItem item={item}/>)}
        </div>
    )
}



export function KlineItem ({item}: {item: ParsedBinanceKline}) {

    return (
        <>
            <div className="" >
                <h1>{item.open}</h1>
                <h1>{item.close}</h1>
                <h1>{item.volume}</h1>
            </div>
        </>
    )
}
