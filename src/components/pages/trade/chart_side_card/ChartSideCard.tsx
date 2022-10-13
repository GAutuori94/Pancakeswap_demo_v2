import React, { useEffect, useState } from "react";
import { NoGraphIcon, SettingsIcon } from "./SideCardIcons";
import { CurrencySelectElements } from "./CurrencySelect";
import { useMarketChange } from "../../../hooks/useMarketChange";
import ChartLayoutComponent from "../ChartLayoutComponent";
import { useFetchApi } from "../../../hooks/useFetch";

export default function ChartSideCard(): JSX.Element {
  const {
    selectedBaseAsset,
    setSelectedBaseAsset,
    selectedQuoteAsset,
    setSelectedQuoteAsset,
  } = useMarketChange("BTC", "BUSD");
  const [randomValue, setRandomValue] = useState(Math.random());

  const selectedMarket = selectedBaseAsset + selectedQuoteAsset;

  interface CurrentAveragePriceResponse {
    mins: number;
    price: string;
  }

  useEffect;

  const { data: currentAvgPrice } = useFetchApi<CurrentAveragePriceResponse>(
    `https://api.binance.com/api/v3/avgPrice?symbol=${selectedMarket}`
  );

  function handleBaseAssetChange(baseAsset: string) {
    setSelectedBaseAsset(baseAsset);
  }

  function handleQuoteAssetChange(quoteAsset: string) {
    setSelectedQuoteAsset(quoteAsset);
  }

  useEffect(() => {
    setRandomValue(() => Math.random());
  }, [selectedMarket]);

  return (
    <>
      <ChartLayoutComponent selectedMarket={selectedMarket} />
      <div className="flex flex-col">
        <div className="flex shrink-0 h-fit px-10">
          <div className="w-80">
            <div
              id="card-border"
              className="rounded-card w-full z-10 max-w-md bg-lightCardBorder dark:bg-darkCardBorder text-lightText dark:text-darkText relative overflow-hidden pt-px px-px pb-0.5"
            >
              <div
                id="card-background"
                className="w-full h-full overflow-inherit bg-lightBackgroundAlt dark:bg-darkBackgroundAlt rounded-card"
              >
                <div
                  id="card-header"
                  className="flex flex-col items-center p-6 w-full border-b border-lightCardBorder dark:border-darkCardBorder"
                >
                  <div className="flex items-center justify-between w-full">
                    <button className="text-lightTextSubtle dark:text-darkTextSubtle w-8 relative items-center border-0 rounded-2xl cursor-pointer inline-flex text-fontSizeButton font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent shadow-none">
                      <NoGraphIcon />
                    </button>
                    <div className="flex flex-col items-center w-full">
                      <h2 className="text-lightText dark:text-darkText font-fontHeavyWeight leading-normal text-fontSizeParagraph">
                        Swap
                      </h2>
                    </div>
                    <div className="flex">
                      <div className="flex">
                        <button className="w-8 relative items-center border-0 rounded-default cursor-pointer inline-flex font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent text-primary dark:text-darkPrimaryDark shadow-none mr-0">
                          <SettingsIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="border-0 p-0 m-0 leading-normal font-fontLightWeight text-lightTextSubtle dark:text-darkTextSubtle">
                      Trade tokens in an instant
                    </p>
                  </div>
                </div>
                <CurrencySelectElements
                  inputBaseAsset={selectedBaseAsset}
                  inputQuoteAsset={selectedQuoteAsset}
                  baseAssetChange={handleBaseAssetChange}
                  quoteAssetChange={handleQuoteAssetChange}
                  priceValue={currentAvgPrice?.price}
                  randomValue={randomValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
