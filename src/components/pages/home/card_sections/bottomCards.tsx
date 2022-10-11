import React from "react";
import { ArrowIcon, LotteryIcon, PredictionIcon } from "./cardIcons";
import { FullButton } from "../../../shared/buttons";

export function YellowCard() {
  return (
    <div
      id="yellow-card"
      className="flex flex-1 max-w-[275px] mb-8 lg:max-w-full lg:mr-6 lg:mb-0"
    >
      <div
        id="yellow-card-outer"
        className="bg-[#ffb237] rounded-card text-lightText dark:text-darkText overflow-hidden relative pt-px pb-1 px-px h-fit lg:rotate-[-2.36deg]"
      >
        <div
          id="yellow-card-inner"
          className="w-full h-full overflow-initial yellowCardGradient rounded-card"
        >
          <div id="yellow-card-body" className="p-6">
            <div
              id="svg-container"
              className="absolute top-6 right-6 lg:rotate-[-2.36deg]"
            >
              <PredictionIcon />
            </div>
            <div id="card-text" className="mt-12 flex flex-col">
              <p className="leading-normal font-fontHeavyWeight text-lightText ">
                Prediction
              </p>
              <h2 className="my-2 leading-[1.1] font-fontHeavyWeight text-lightText text-[2rem] xl:text-[2.5rem]">
                $150 billion
              </h2>
              <p className="mb-6 leading-normal font-fontHeavyWeight text-lightText">
                in BNB + CAKE won so far
              </p>
              <p className="mb-10 leading-normal font-fontLightWeight text-lightText">
                Predict the price trend of BNB or CAKE to win
              </p>
            </div>
            <div id="card-footer" className="flex items-center justify-center">
              <FullButton value="Play">
                <ArrowIcon />
              </FullButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PurpleCard() {
  return (
    <div id="yellow-card" className="flex flex-1 max-w-[275px] lg:max-w-full">
      <div
        id="yellow-card-outer"
        className="bg-[#3c1786] rounded-card text-lightText dark:text-darkText overflow-hidden relative pt-px pb-1 px-px h-fit lg:rotate-[1.43deg]"
      >
        <div
          id="yellow-card-inner"
          className="w-full h-full overflow-initial purpleCardGradient rounded-card"
        >
          <div id="yellow-card-body" className="p-6">
            <div
              id="svg-container"
              className="absolute top-6 right-6 lg:rotate-[1.43deg]"
            >
              <LotteryIcon />
            </div>
            <div id="card-text" className="mt-12 flex flex-col">
              <p className="leading-normal font-fontHeavyWeight text-white ">
                Lottery
              </p>
              <h2 className="leading-normal font-fontHeavyWeight text-lightText text-[2.5rem] purpleCardTextFill">
                $85,377
              </h2>
              <p className="mb-6 leading-normal font-fontHeavyWeight text-white">
                in CAKE prizes this round
              </p>
              <p className="mb-10 leading-normal font-fontLightWeight text-white">
                Buy tickets with CAKE, win CAKE if your numbers match
              </p>
            </div>
            <div id="card-footer" className="flex items-center justify-center">
              <FullButton value="Buy Tickets">
                <ArrowIcon />
              </FullButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
