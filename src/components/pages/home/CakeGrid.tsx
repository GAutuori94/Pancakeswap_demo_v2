import React, { useEffect, useState } from 'react';
import { useSymbols } from '../../context/symbolsContext';
import { useKline } from '../../context/klineContext';
import { useTicker } from '../../context/tickerContext';
import { ExchangeInfoSymbol } from '../../../types/exchangeModelTypes';

export function CakeGrid() {
  const { dataFetchedLoading, dataFetchedError, dataFetched } = useSymbols();
  const {
    dataFetchedLoading: parsedDataFetchedLoading,
    dataFetchedError: parsedDataFetchedError,
    parsedData,
  } = useKline();
  const {
    dataFetchedLoading: tickerDataFetchedLoading,
    dataFetchedError: tickerDataFetchedError,
    dataFetched: tickerDataFetched,
  } = useTicker();

  return (
    <div className=' cake_grid w-full self-center gap-y-[50px]  mt-[70px] grid grid-cols-3 grid-rows-2 '>
      <div className='cake_grid_element'>
        <div className='cake_grid_element_header  text-darkTextSubtle dark:text-darkTextSubtle'>
          <p>Circulating Supply</p>{' '}
        </div>
        <div className='cake_grid_element_content text-lightText dark:text-darkContrast text-2xl'>
          140,419,267
        </div>
      </div>
      <div className='cake_grid_element'>
        <div className='cake_grid_element_header  text-darkTextSubtle dark:text-darkTextSubtle'>
          <p>Total Supply</p>{' '}
        </div>
        <div className='cake_grid_element_content text-lightText dark:text-darkContrast text-2xl'>
          333,798,793
        </div>
      </div>
      <div className='cake_grid_element'>
        <div className='cake_grid_element_header text-darkTextSubtle dark:text-darkTextSubtle'>
          <p>Max Supply</p>{' '}
        </div>
        <div className='cake_grid_element_content text-lightText dark:text-darkContrast text-2xl'>
          750,000,000
        </div>
      </div>
      <div className='cake_grid_element'>
        <div className='cake_grid_element_header  text-darkTextSubtle dark:text-darkTextSubtle'>
          <p>Market Cap</p>{' '}
        </div>
        <div className='cake_grid_element_content text-lightText dark:text-darkContrast text-2xl'>
          $630 million
        </div>
      </div>
      <div className='cake_grid_element'>
        <div className='cake_grid_element_header  text-darkTextSubtle dark:text-darkTextSubtle'>
          <p>Burned to date</p>{' '}
        </div>
        <div className='cake_grid_element_content text-lightText dark:text-darkContrast text-2xl'>
          {' '}
          605,884,331{' '}
        </div>
      </div>
      <div className='cake_grid_element'>
        <div className='cake_grid_element_header  text-darkTextSubtle dark:text-darkTextSubtle'>
          <p>Current Emissions</p>{' '}
        </div>
        <div className='cake_grid_element_content text-lightText dark:text-darkContrast text-2xl'>
          11.16/block
        </div>
      </div>
    </div>
  );
}

export function SymbolsItem({ item }: { item: ExchangeInfoSymbol }) {
  return (
    <>
      <div className='text-darkTextSubtle dark:text-darkTextSubtle'>
        <p>{item.quoteOrderQtyMarketAllowed}</p>
      </div>
    </>
  );
}
