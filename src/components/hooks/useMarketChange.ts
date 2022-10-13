import { useEffect, useState } from "react";

export const useMarketChange = (baseAsset: string, quoteAsset: string) => {
  const [selectedBaseAsset, setSelectedBaseAsset] = useState(baseAsset);
  const [selectedQuoteAsset, setSelectedQuoteAsset] = useState(quoteAsset);

  return {
    selectedBaseAsset,
    selectedQuoteAsset,
    setSelectedBaseAsset,
    setSelectedQuoteAsset,
  };
};
