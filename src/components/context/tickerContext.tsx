import { useFetchApi } from "../hooks/useFetch";
import { TickerModel } from "../../types/tickerModelTypes";
import React, { createContext, useContext } from "react";


export type TickerContextProps = {
    dataFetchedLoading: boolean,
    dataFetchedError: Error | undefined
    dataFetched: TickerModel[],
}


export const TickerContext = createContext<TickerContextProps | undefined>(undefined)

export function TickerContextProvider({ children }: { children: React.ReactNode }) {
    const {loading: dataFetchedLoading, error: dataFetchedError, data: dataFetched} = useFetchApi<TickerModel[]>('/api/v3/ticker/24hr?symbols=["ETHBTC","BNBUSDT"]')

    return (
        <TickerContext.Provider
            value={{
                dataFetchedLoading,
                dataFetchedError,
                dataFetched: dataFetched || []
            }}>
            {children}

        </TickerContext.Provider>
    )
}

export function useTicker() {
    const context = useContext(TickerContext)
    if (context === undefined)
        throw new Error('Context must be used with a provider')
    return context
}
