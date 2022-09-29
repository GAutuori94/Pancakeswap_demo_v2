import React, { useEffect, useState } from "react";
import AreaChart, { PriceChartProps } from "../../shared/AreaChart";
import dayjs from "dayjs";
import { intervals } from "../../shared/constants";
import { useLazyFetch } from "../../hooks/useLazyFetch";
import { usePercDiff } from "../../hooks/usePercDiff";

type BinanceKline = [
  number,
  string,
  string,
  string,
  string,
  string,
  number,
  string,
  number,
  string,
  string,
  string
];

export type ParsedBinanceKline = {
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  openTime: number;
  closeTime: number;
};

export default function ChartLayoutComponent() {
  const [parsedData, setParsedData] = useState<ParsedBinanceKline[]>([]);
  const [chartData, setChartData] = useState<PriceChartProps>([]);
  const [selectedInterval, setSelectedInterval] = useState<string>(
    intervals[intervals.length - 1]
  );

  const [selectedSymbol, setSelectedSymbol] = useState<string>("BTCBUSD");

  const { data, trigger: fetchNewData } =
    useLazyFetch<BinanceKline[]>("/api/v3/klines?");
  console.log("data before useEffect: ", data);
  useEffect(() => {
    if (data) {
      const parsedData: ParsedBinanceKline[] = data.map((item) => {
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
      setParsedData(parsedData);
    }
  }, [data]);
  console.log("parsedData after 1st useEffect: ", parsedData);

  useEffect(() => {
    const reqParams = new URLSearchParams({
      symbol: selectedSymbol,
      interval: selectedInterval,
    });

    fetchNewData({}, reqParams);
  }, [selectedInterval]);

  useEffect(() => {
    setChartData(
      parsedData.map((item) => ({
        close: item.close,
        open: item.open,
        date: dayjs(item.closeTime).format("DD MMM"),
      }))
    );
  }, [parsedData]);

  console.log("parsedData: ", parsedData);

  const { percDiff: percDifference } = usePercDiff(parsedData);

  function percentualDiff() {
    return (
      <span
        className={`px-1 py-2 border border-black rounded ${
          percDifference > 0 ? "bg-green-300" : "bg-red-300"
        }`}
      >
        {" "}
        {percDifference.toFixed(2)}%{" "}
      </span>
    );
  }

  percentualDiff();

  const lines = [
    {
      value: "close",
      color: percDifference > 0 ? "#0098a1" : "#ed4b9e",
    },
    // { value: 'open', color: 'green' },
  ];

  return (
    <div className="w-full h-[50vh] py-2 px-4">
      <div className="flex justify-between items-center w-full my-4">
        <div className="flex flex-col justify-start">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-xl ">
              {selectedSymbol} ({selectedInterval}){" "}
            </h3>
            {parsedData.length > 2 && percentualDiff()}
          </div>
          {parsedData.length > 2 && (
            <div className="text-xs text-lg ">
              {" "}
              {dayjs(parsedData[parsedData.length - 1].closeTime).format(
                "DD, MMM, YYYY"
              )}{" "}
              {dayjs(parsedData[parsedData.length - 1].closeTime).format(
                "HH:MM A"
              )}{" "}
            </div>
          )}
        </div>
        <select
          value={selectedInterval}
          onChange={(e) => setSelectedInterval(e.target.value)}
        >
          {intervals.map((interval, idx) => {
            return (
              <option key={idx} value={interval}>
                {interval}
              </option>
            );
          })}
        </select>
      </div>
      <AreaChart lines={lines} data={chartData} />
    </div>
  );
}
