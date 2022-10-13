import { useState, useEffect } from "react";
import { ParsedBinanceKline } from "../pages/trade/ChartLayoutComponent";

export type percDiff = number;

export function usePercDiff(parsedData: ParsedBinanceKline[]) {
  const [percDiff, setPercDiff] = useState<percDiff>(Number);

  useEffect(() => {
    const percDiff =
      ((parsedData[parsedData.length - 1]?.close - parsedData[0]?.close) /
        parsedData[0]?.close) *
      100;
    setPercDiff(percDiff);
  }, [parsedData]);

  return { percDiff };
}
