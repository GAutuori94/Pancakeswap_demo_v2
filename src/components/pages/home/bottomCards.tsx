import React from "react";
import { PredictionIcon } from "./cardIcons";
import { FullButton } from "../../shared/buttons";

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
              <h2 className="my-2 leading-[1.1] font-fontHeavyWeight text-lightText xl:text-[2.5rem]">
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
              <FullButton value="Play" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PurpleCard() {
  return (
    <div id="purple-card">
      <div id="purple-card-outer">
        <div id="purple-card-inner">
          <div id="purple-card-body">
            <div id="svg-container">
              <img src="assets/images/svg/asset 51.svg" />
            </div>
            <div id="card-text">
              <p>Lottery</p>
              <div>
                <span>$60,512</span>
              </div>
              <p>in CAKE prizes this round</p>
              <p>Predict the price trend of BNB or CAKE to win</p>
            </div>
            <div id="card-footer">
              <a>
                <button
                  className="sc-ee37452c-0 byrMAA w-full"
                  /* scale="md" */
                >
                  <div
                    color="invertedContrast"
                    className="sc-2fd47505-0 dUfaYe text-fontSizeButton"
                  >
                    Buy Tickets
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    color="invertedContrast"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sc-6457768a-0 ftixwH"
                  >
                    <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
