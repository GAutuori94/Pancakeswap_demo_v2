import { useFetchApi } from "../hooks/useFetch";
import { ExchangeModel } from "../../types/exchangeModelTypes";
import React, { createContext, useContext } from "react";


export type SymbolsContextProps = {
    dataFetchedLoading: boolean,
    dataFetchedError: Error | undefined
    dataFetched: ExchangeModel,
}


export const SymbolsContext = createContext<SymbolsContextProps | undefined>(undefined)

export function SymbolsContextProvider({ children }: { children: React.ReactNode }) {
    const {loading: dataFetchedLoading, error: dataFetchedError, data: dataFetched} = useFetchApi<ExchangeModel>('/api/v3/exchangeInfo')

    return (
        <SymbolsContext.Provider
            value={{
                dataFetchedLoading,
                dataFetchedError,
                dataFetched: dataFetched || {}
            }}>
            {children}

        </SymbolsContext.Provider>
    )
}

export function useSymbols() {
    const context = useContext(SymbolsContext)
    if (context === undefined)
        throw new Error('Context must be used with a provider')
    return context
}
