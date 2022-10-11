import React, {useState, useEffect} from "react";
import { useKline } from "../../context/klineContext";
import { useSymbols } from "../../context/symbolsContext";

export function CryptosTable() {

    const {dataFetchedError, dataFetchedLoading, dataFetched} = useSymbols()
    const {dataFetchedError: parsedDataError, dataFetchedLoading: parsedDataLoading, parsedData} = useKline()



    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, []);

    //   function handleScroll() {
    //     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //     setIsFetching(true)
    //   }

    //   const [isFetching, setIsFetching] = useState(false);

    //   useEffect(() => {
    //     if (!isFetching) return;
    //     fetchMoreListItems();
    //   }, [isFetching]);

    //   function fetchMoreListItems() {
    //       useSymbols(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
    //       setIsFetching(false);
    //   }


  return (
    <div className="farms_table mt-[16px] w-[70%] bg-lightBackgroundAlt rounded-default border-1 border-lightCardBorder box-border ">
      <div className="farms_table_container relative ">
        <div className="farm_table_overflow overflow-visible scroll-mt-[64px] ">
            <table className="table_element font-[14px] border-collapse rounded-[4px] w-100 border-spacing-0 ">
                <tbody className="flex flex-col items-start gap-10 ">
                    {dataFetched.symbols?.slice(0, 40).map((item) => <tr className="flex flex-row justify-between items-end gap-[100px]" key={item.symbol}>
                        <td className="flex  ">Qui ci vanno le icone</td>
                        <td className="flex text-lightText font-fontHeavyWeight px-[10px] ">{item.baseAsset} - {item.quoteAsset}</td>
                        <td className="flex justify-start text-lightTextSubtle ">{item.status}</td>
                        <td>
                        {parsedData.slice(0, 1).map((item) => < div className="text-lightTextSubtle text-fontSizeGeneral" key={item.volume}>Volume <br/> <span className="text-lightText text-fontSizeCopy font-fontLightWeight"> {item.volume} </span></div>)}
                        </td>
                        </tr>)}

                </tbody>

            </table>
        </div>
      </div>
    </div>
  );
}
