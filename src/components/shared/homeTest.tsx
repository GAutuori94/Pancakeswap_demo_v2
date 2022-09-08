/* eslint-disable react/jsx-key */
import React from "react";
import { useFetchApi } from "../hooks/useFetch";
import { ExchangeModel, ExchangeInfoSymbol } from "../../types";
import { useSymbols } from "../context/symbolsContext";


export function Home(){
    return <SymbolsRender />
}

export default function SymbolsRender() {

    const {dataFetchedLoading, dataFetchedError, dataFetched} = useSymbols()


    return (
        <div className="symbols_container">
            {(dataFetchedLoading) && <h1>Loading ...</h1>}
            {(dataFetchedError) && <h1>Errore nel fetch ...</h1>}
            {dataFetched.map((item) => <SymbolsItem item={item}/>)}
        </div>
    )
}



export function SymbolsItem ({item}: {item: ExchangeInfoSymbol}) {

    return (
        <>
            <div>
                <h1>{item.symbol}</h1>
                <h1>{item.baseAsset}</h1>
                <h1>{item.quoteAsset}</h1>
            </div>
        </>
    )
}