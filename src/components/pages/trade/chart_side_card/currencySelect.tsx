import React, { useEffect } from "react";
import { useSymbols } from "../../../context/symbolsContext";

interface CurrencySelectProps {
  inputBaseAsset: string;
  inputQuoteAsset: string;
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
      <div
        id="card-body"
        className="flex flex-col relative justify-between p-4"
      >
        <div className="grid auto-rows-auto gap-y-2">
          <div id="swap-currency-input" className="relative">
            <div className="flex items-center justify-between">
              <div className="flex">
                <select
                  value={props.inputBaseAsset}
                  title="base-asset-selector"
                  className="py-0 px-2 relative items-center border-0 rounded-default cursor-pointer inline-flex text-fontSizeButton font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent text-primary shadow-none"
                  onChange={(e) => props.baseAssetChange(e.target.value)}
                >
                  {baseAssetList}
                </select>
              </div>
            </div>
            <div className="flex flex-col flex-nowrap relative bg-lightBackgroundAlt dark:bg-darkBackgroundAlt z-[1]">
              <label className="rounded-default bg-lightInput dark:bg-darkInput">
                <div className="flex flex-row flex-nowrap items-center text-lightText dark:text-darkText text-xs pt-3 px-4 pb-0">
                  <input
                    type={"text"}
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    placeholder="0.0"
                    minLength={1}
                    maxLength={79}
                    inputMode="decimal"
                    className="text-lightText dark:text-darkText w-0 relative font-medium outline-none border-none flex-auto bg-transparent text-right whitespace-nowrap overflow-hidden text-ellipsis p-0 appearance-textfield"
                  />
                </div>
                <div className="flex flex-row flex-nowrap items-center justify-end py-3 pr-3 pl-4"></div>
              </label>
            </div>
          </div>

          <div id="swap-currency-output" className="relative">
            <div className="flex items-center justify-between">
              <div className="flex">
                <select
                  value={props.inputQuoteAsset}
                  title="quote-asset-selector"
                  className="py-0 px-2 relative items-center border-0 rounded-default cursor-pointer inline-flex text-fontSizeButton font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent text-primary shadow-none"
                  onChange={(e) => props.quoteAssetChange(e.target.value)}
                >
                  {quoteAssetList}
                </select>
              </div>
            </div>
            <div className="flex flex-col flex-nowrap relative bg-lightBackgroundAlt dark:bg-darkBackgroundAlt z-[1]">
              <label className="rounded-default bg-lightInput dark:bg-darkInput">
                <div className="flex flex-row flex-nowrap items-center text-lightText dark:text-darkText text-xs pt-3 px-4 pb-0">
                  <input
                    type={"text"}
                    pattern="^[0-9]*[.,]?[0-9]*$"
                    placeholder="0.0"
                    minLength={1}
                    maxLength={79}
                    inputMode="decimal"
                    className="text-lightText dark:text-darkText w-0 relative font-medium outline-none border-none flex-auto bg-transparent text-right whitespace-nowrap overflow-hidden text-ellipsis p-0 appearance-textfield"
                  />
                </div>
                <div className="flex flex-row flex-nowrap items-center justify-end py-3 pr-3 pl-4"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
