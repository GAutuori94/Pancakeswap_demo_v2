import {
  KlineResponseModel,
  ParsedBinanceKline,
} from "../../types/klineModelTypes";
import { useFetchApi } from "../hooks/useFetch";
import React, { createContext, useContext, useEffect, useState } from "react";

export type KlineContextProps = {
  dataFetchedLoading: boolean;
  dataFetchedError: Error | undefined;
  dataFetched: KlineResponseModel[];
};

export type parsedDataContextProps = {
  dataFetchedLoading: boolean;
  dataFetchedError: Error | undefined;
  parsedData: ParsedBinanceKline[];
}

export const KlineContext = createContext<parsedDataContextProps | undefined>(
  undefined
);

export function KlineContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    loading: dataFetchedLoading,
    error: dataFetchedError,
    data: dataFetched,
  } = useFetchApi<KlineResponseModel[]>("/api/v3/klines?symbol=BTCBUSD&interval=1h");

  const [parsedData, setParsedData] = useState<ParsedBinanceKline[]>([]);

  useEffect(() => {
    if (dataFetched) {
      const parsedData: ParsedBinanceKline[] = dataFetched.map((item) => {
        return {
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
          volume: parseFloat(item[5]),
          openTime: item[0],
          closeTime: item[6],
        };
      });
      setParsedData(parsedData)
    }
  }, [dataFetched]);

  return (
    <KlineContext.Provider
      value={{
        dataFetchedLoading,
        dataFetchedError,
        parsedData: parsedData || []
      }}
    >
      {children}
    </KlineContext.Provider>
  );
}

export function useKline() {
  const context = useContext(KlineContext);
  if (context === undefined)
    throw new Error("Context must be used with a provider");
  return context;
}
