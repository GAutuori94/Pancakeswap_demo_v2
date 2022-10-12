import { useEffect, useState } from "react";

export const useMarketChange = (market: string) => {
  const [selectedMarket, setSelectedMarket] = useState(market);
  const [selectedBaseAsset, setSelectedBaseAsset] = useState("BTC");
  const [selectedQuoteAsset, setSelectedQuoteAsset] = useState("BUSD");

  useEffect(() => {
    const newMarket = selectedBaseAsset + selectedQuoteAsset;
    setSelectedMarket(newMarket);
  }, [selectedBaseAsset, selectedQuoteAsset]);

  return {
    selectedBaseAsset,
    selectedQuoteAsset,
    setSelectedBaseAsset,
    setSelectedQuoteAsset,
    selectedMarket,
    setSelectedMarket,
  };
};
