import React, {useEffect, useState} from "react";
import { useSymbols } from "../../context/symbolsContext";
import { useKline } from "../../context/klineContext";
import { useTicker } from "../../context/tickerContext";
import { ExchangeInfoSymbol } from "../../../types/exchangeModelTypes";

export function VerticalCarousel() {

  const {dataFetchedLoading, dataFetchedError, dataFetched} = useSymbols();
  const {dataFetchedLoading: parsedDataFetchedLoading, dataFetchedError: parsedDataFetchedError, parsedData} = useKline();
  const {dataFetchedLoading: tickerDataFetchedLoading, dataFetchedError: tickerDataFetchedError, dataFetched: tickerDataFetched} = useTicker();

  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const gridInterval = setInterval(() => {
      setShowGrid(true);
      const gridTimeOut = setTimeout(() => {
        setShowGrid(false)
      }, 6000)
      return () => clearTimeout(gridTimeOut);
    }, 6000);
    return () => {clearInterval(gridInterval)};
  }, [showGrid]);


  return (
<div>
    <div className="vertical_carousel w-50 ml-10 bg-[#e9f1f5]">
      <div className="carousel_container__vertical_carousel mt-[24px]">
        <div className="top__carousel_container__vertical_carousel mb-[24px] flex items-center">
          <h2 className="text-lightText text-fontSizeParagraph leading-lineHeightPar font-fontSizeParagraph font-fontHeavyWeight flex gap-0.5">
            Top
            <span className="text-lightSecondary dark:text-darkSecondary">Farms</span>
          </h2>
          <button >
            <svg
              viewBox="0 0 24 25"
              height="24px"
              width="24px"
              color="textSubtle"
              xmlns="http://www.w3.org/2000/svg"
              className="invert_button fill-lightTextSubtle ml-[15px]"
            >
              <path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" />
            </svg>
          </button>
        </div>
      </div>


    <div className="verticalCarousel_gridContainer h-[80px]">
      <div className="gridView__bottom__carousel_container grid grid-cols-5 gap-x-[70px]">
          {dataFetched.symbols?.slice(0, 5).map((item) =>
          <div className="text-lightSecondary dark:text-darkSecondary mb-[8px] pr-[16px] " key={item.symbol}> {item.symbol} </div>)}
          {(parsedData.slice(0, 5).map((item) =>
          <div className="text-lightText dark:text-darkText pr-[16px] font-fontHeavyWeight" key={item.volume}> {item.close} </div>))}
          {dataFetched.symbols?.slice(0, 5).map((item) => <div key={item.symbol}> <SymbolsItem item={item} /> </div>)}
        </div>
      </div>

    <div className={showGrid? "verticalCarousel_gridContainer h-[80px] bg-[#e9f1f5]" : "hidden"}>
      <div className="gridView__bottom__carousel_container grid grid-cols-5 gap-x-[70px]">
          {tickerDataFetched.slice(0, 5).map((item) =>
          <div className="text-lightSecondary dark:text-darkSecondary mb-[8px] pr-[16px] " key={item.symbol}> {item.symbol} </div>)}
        </div>
      </div>
    </div>




</div>
  );
}


export function SymbolsItem ({item}: {item: ExchangeInfoSymbol}) {

  return (
      <>
          <div className="text-lightTextSubtle dark:text-lightTextSubtle" >
            <p>{item.status}</p>
          </div>
      </>
  )
}



