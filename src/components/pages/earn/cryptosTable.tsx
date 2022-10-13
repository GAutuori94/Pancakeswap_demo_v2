import React, {useState, useEffect} from "react";
import { useKline } from "../../context/klineContext";
import { useSymbols } from "../../context/symbolsContext";
import { png } from "../../../assets/currencies_color/_currenciesExport";
import { ExchangeInfoSymbol } from "../../../types/exchangeModelTypes";
import { TopBarTable } from "./filterTable";





export function CryptosTable() {

    const {dataFetchedError, dataFetchedLoading, dataFetched} = useSymbols()
    const {dataFetchedError: parsedDataError, dataFetchedLoading: parsedDataLoading, parsedData} = useKline()



  return (
    <>
    <TopBarTable />
    <div className="farms_table mt-[16px] w-[60%] p-[20px ] bg-lightBackgroundAlt rounded-default border-1 border-lightCardBorder box-border ">
      <div className="farms_table_container relative ">
        <div className="farm_table_overflow overflow-visible scroll-mt-[64px] ">
            <table className="table_element font-[14px] border-collapse rounded-[4px] w-100 border-spacing-0 ">
                <tbody className="flex flex-col items-start gap-10 mt-[20px] ">
                    {dataFetched.symbols?.slice(0, 40).map((item) => <tr className="flex flex-row justify-between items-end gap-[100px]" key={item.symbol}>
                      <td> <IconsComponent item={item} /> </td>
                        <td className="flex text-lightText font-fontHeavyWeight px-[10px] ">{item.baseAsset} - {item.quoteAsset}</td>
                        <td className="flex justify-start text-lightTextSubtle ">{item.status}</td>
                        <td>
                        {parsedData.slice(0, 1).map((item) => < div className="flex flex-col text-lightTextSubtle text-fontSizeGeneral" key={item.volume}>Volume <br/> <span className="text-lightText text-fontSizeCopy font-fontLightWeight"> {item.volume} </span></div>)}
                        </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
      </div>
    </div>
    </>
  );
}



function IconsComponent({item}: {item: ExchangeInfoSymbol}) {

  const fallback = "../../../assets/currencies_color/currenciesSvg/btc.png"

  const imageOnErrorHandler = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = fallback;
  };


  return (
    <div className=" relative flex justify-center">
      <img src={png[`${item.quoteAsset.toLowerCase()}.png`]} className=" absolute w-[20px] h-[20px] mr-[7px] mb-[10px]" />
      <img src={png[`${item.baseAsset.toLowerCase()}.png`]} className="w-[32px] h-[32px] ml-[30px] z-[1]" />
    </div>
  )
}
