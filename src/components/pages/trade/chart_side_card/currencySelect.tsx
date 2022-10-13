import React from "react";
import { useSymbols } from "../../../context/symbolsContext";

interface CurrencySelectProps {
  baseAssetChange: (baseAsset: string) => void;
  quoteAssetChange: (quoteAsset: string) => void;
}
export function CurrencySelectElements({
  ...props
}: CurrencySelectProps): JSX.Element {
  const { dataFetched } = useSymbols();

  const filteredList = (assetType: string) => {
    const completeAssetsList = dataFetched.symbols?.map((market) => {
      if (assetType === "baseAsset") {
        return market.baseAsset;
      } else if (assetType === "quoteAsset") {
        return market.quoteAsset;
      }
    });

    const filteredAssetsList = completeAssetsList?.filter((asset, index) => {
      return completeAssetsList.indexOf(asset) === index;
    });

    return filteredAssetsList;
  };

  const baseAssetFilteredList = filteredList("baseAsset");
  const quoteAssetFilteredList = filteredList("quoteAsset");

  const baseAssetList = baseAssetFilteredList?.slice(0, 10).map((baseAsset) => (
    <option key={baseAsset} value={baseAsset}>
      {baseAsset}
    </option>
  ));

  const quoteAssetList = quoteAssetFilteredList
    ?.slice(0, 10)
    .map((quoteAsset) => (
      <option key={quoteAsset} value={quoteAsset}>
        {quoteAsset}
      </option>
    ));
  return (
    <>
      <select
        /* value={props.inputBaseAsset} */
        title="base-asset-selector"
        className="py-0 px-2 relative items-center border-0 rounded-default cursor-pointer inline-flex text-fontSizeButton font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent text-primary shadow-none"
        onChange={(e) => props.baseAssetChange(e.target.value)}
      >
        {baseAssetList}
      </select>
      <select
        /* value={props.inputQuoteAsset} */
        title="quote-asset-selector"
        className="py-0 px-2 relative items-center border-0 rounded-default cursor-pointer inline-flex text-fontSizeButton font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent text-primary shadow-none"
        onChange={(e) => props.quoteAssetChange(e.target.value)}
      >
        {quoteAssetList}
      </select>
    </>
  );
}
