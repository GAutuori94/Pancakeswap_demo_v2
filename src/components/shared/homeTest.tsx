/* eslint-disable react/jsx-key */
import React from "react";
import { ExchangeModel, ExchangeInfoSymbol } from "../../types";
import { ImageComponent } from "../animation/imageComponent";
import { useSymbols } from "../context/symbolsContext";

export function Home() {
  return <SymbolsRender />;
}

export default function SymbolsRender() {
  const { dataFetchedLoading, dataFetchedError, dataFetched } = useSymbols();

  return (
    <div className="symbols_container">
      <ImageComponent />
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
      <div>
        <ul>
          <li>{item.symbol}</li>
          <li>{item.baseAsset}</li>
          <li>{item.quoteAsset}</li>
          <li>{item.quoteAssetPrecision}</li>
        </ul>
      </div>
    </>
  );
}
