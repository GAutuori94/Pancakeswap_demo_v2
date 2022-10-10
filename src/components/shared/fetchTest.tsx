/* eslint-disable react/jsx-key */
import React from "react";
import { ExchangeInfoSymbol } from "../../types/exchangeModelTypes";
import { useSymbols } from "../context/symbolsContext";

export function ResponseRender() {
  return <SymbolsRender />;
}

export default function SymbolsRender() {
  const { dataFetchedLoading, dataFetchedError, dataFetched } = useSymbols();

  return (
    <div className="">
      {dataFetchedLoading && <h1>Loading ...</h1>}
      {dataFetchedError && <h1>Errore nel fetch ...</h1>}
      {dataFetched.symbols?.map((item) => (
        <SymbolsItem item={item} />
      ))}
    </div>
  );
}

export function SymbolsItem({ item }: { item: ExchangeInfoSymbol }) {
  return (
    <>
      <div className="">
        <h1>{item.symbol}</h1>
        <h1>{item.baseAsset}</h1>
        <h1>{item.quoteAsset}</h1>
      </div>
    </>
  );
}
