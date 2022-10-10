import React, { useEffect, useRef, useState } from "react";
import AreaChart, { PriceChartProps } from "../../shared/AreaChart";
import dayjs from "dayjs";
import { intervals } from "../../shared/constants";
import { useLazyFetch } from "../../hooks/useLazyFetch";
import { usePercDiff } from "../../hooks/usePercDiff";

export type BinanceKline = [
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
  const focusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focusRef) {
      focusRef.current?.focus();
    }
  }, []);

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
        date: dayjs(item.closeTime).format(" DD MMM"),
      }))
    );
  }, [parsedData]);

  console.log("parsedData: ", parsedData);

  const { percDiff: percDifference } = usePercDiff(parsedData);

  function percentualDiffNumber() {
    return (
      <span
        className={` font-extrabold ${
          percDifference > 0 ? "text-success" : "text-failure"
        }`}
      >
        {" "}
        {percDifference.toFixed(2)}%{" "}
      </span>
    );
  }

  function bigCloseNumber() {
    const lastElement = parsedData.pop();
    return lastElement?.close;
  }

  const lines = [
    {
      value: "close",
      color: percDifference > 0 ? "#31d0aa" : "#ed4b9e",
    },
  ];

  return (
    <div className="h-[100vh] w-[auto]">
      <div className="w-[47%] h-[60%]">
        <div className="flex justify-between items-center w-full  ">
          <div className="flex flex-col justify-start">
            <div className="flex gap-2 items-center">
              <h1 className="text-3xl font-semibold text-lightText ml-2">
                {bigCloseNumber()}
              </h1>
              <h3 className="text-lg font-semibold  text-lightTextSubtle ml-2.5 ">
                {selectedSymbol}{" "}
              </h3>
              {parsedData.length > 2 && percentualDiffNumber()}
            </div>
            {parsedData.length > 2 && (
              <div className="text-xs text-lg text-lightSecondary ml-2.5">
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
          <div
            className="btn_container bg-[#EFF4F5] rounded-default border-1 border-solid border-[#E9EAEB] box-border w-max flex "
            ref={focusRef}
          >
            {intervals.map((interval, idx) => {
              return (
                <input
                  key={idx}
                  type="button"
                  value={interval}
                  onClick={(e) => {
                    setSelectedInterval((e.target as HTMLInputElement).value);
                  }}
                  className="btn_interval__container uppercase"
                />
              );
            })}
            <input
              type="button"
              value="1Y"
              onClick={(e) => {
                setSelectedInterval((e.target as HTMLInputElement).value);
              }}
              className="btn_interval__container uppercase"
            />
          </div>
        </div>
        <AreaChart lines={lines} data={chartData} />
      </div>
    </div>
  );
}
