import { useEffect, useState } from "react";

export const useMarketChange = (market: string) => {
  const [selectedMarket, setSelectedMarket] = useState(market);

  useEffect(() => console.log(selectedMarket), [selectedMarket]);

  return { selectedMarket, setSelectedMarket };
};
