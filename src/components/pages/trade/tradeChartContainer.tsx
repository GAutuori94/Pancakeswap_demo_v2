import React from "react";
import { useMarketChange } from "../../hooks/useMarketChange";
import ChartLayoutComponent from "./chartLayoutComponent";
import ChartSideCard from "./chart_side_card/chartSideCard";
import { CurrencySelectElements } from "./chart_side_card/currencySelect";

export default function TradeChartContainer() {
  const {
    selectedBaseAsset,
    setSelectedBaseAsset,
    selectedQuoteAsset,
    setSelectedQuoteAsset,
  } = useMarketChange("BTC", "BUSD");

  const selectedMarket = selectedBaseAsset + selectedQuoteAsset;

  function handleBaseAssetChange(baseAsset: string) {
    setSelectedBaseAsset(baseAsset);
  }

  function handleQuoteAssetChange(quoteAsset: string) {
    setSelectedQuoteAsset(quoteAsset);
  }

  return (
    <div className="flex  flex-col">
      <div className="grow max-w-full">
        <div className="flex flex-col items-center w-full pt-4 px-4 pb-0 bg-auto lightGradientBubblegum dark:darkGradientBubblegum ">
          <ChartLayoutComponent selectedMarket={selectedMarket} />

          <ChartSideCard>
            <CurrencySelectElements
              baseAssetChange={handleBaseAssetChange}
              quoteAssetChange={handleQuoteAssetChange}
            />
          </ChartSideCard>
        </div>
      </div>
    </div>
  );
}
