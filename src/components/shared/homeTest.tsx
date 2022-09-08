import { useFetchApi } from "../hooks/useFetch";
// import { ResponseExchangeModel } from "../../types";
import React from "react";
import { ExchangeModel } from "../../types";


export function Home(){
    return <Test />
}

export default function Test() {
    const {loading, error, data: dataFetched} = useFetchApi<ExchangeModel>('/api/v3/exchangeInfo')
    
    console.log(dataFetched?.symbols)


    const infosDestr = dataFetched?.symbols.map((info) => {
        return {
            symbol: info.symbol
        }
    })



    return (

        <div className="data_container">
            <h1>Fetch:</h1>
            {/* {loading && <h1>Loading...</h1>}
            {error && <h1>Errore nel fetch...</h1>}
            {infos && infos.symbols.map(item => <InfoItem item={item} />)} */}
        </div>
    )
}

// export function InfoItem ({item}: {item: ResponseExhangeModel}) {

//     return (
//         <>
//             <div className="infoitem_card">
//                 <h1>{item.response.symbols}</h1>
//                 <h2>{item.baseAsset}</h2>
//                 <h2>{item.quoteAsset}</h2>
//             </div>
//         </>
//     )

// }