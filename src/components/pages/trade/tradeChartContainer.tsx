import React from "react";
import ChartSideCard from "./chart_side_card/ChartSideCard";

export default function TradeChartContainer() {
  return (
    <div className="flex relative">
      <div className="grow max-w-full">
        <div className="flex flex-col items-center w-full pt-4 px-4 pb-0 bg-auto lightGradientBubblegum dark:darkGradientBubblegum md:pt-6 md:ptx-6 xl:pt-8 xl:px-8">
          <div className="flex justify-center py-10 p-4 mb-11 md:pt-14 md:px-10 md:pb-8 md:mb-0 w-full">
            <div className="flex justify-center w-full relative">
              <ChartSideCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
