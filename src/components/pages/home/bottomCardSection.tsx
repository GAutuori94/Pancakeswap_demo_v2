import React from "react";
import { YellowCard, PurpleCard } from "./bottomCards";

export default function BottomCardSection() {
  return (
    <section id="bottom_card_section">
      <div
        id="bottom-cards-section-background"
        className="flex flex-col items-center relative z-10 py-12"
      >
        <div
          id="section-inner-box"
          className="m-0 w-full max-w-screen-lg min-h-[auto] py-4 px-4  sm:px-6 md:py-8 xl:py-12"
        >
          {/* SECTION - Animated background needs to be added */}
          <div
            id="animated-background"
            className="-z-10 overflow-hidden absolute w-full h-full top-0 left-0"
          ></div>
          {/* !SECTION */}
          <div
            id="panel-element"
            className="bg-lightBackgroundAlt2 dark:bg-darkBackgroundAlt2 p-4 border-1 border-lightCardBorder backdrop-blur-md rounded-[4rem] lg:p-10"
          >
            <div
              id="card-section-container"
              className="flex flex-col items-center justify-center"
            >
              <div id="card-section-text">
                <h2 className="text-[2.25rem] xl:text-[2.5rem] font-fontHeavyWeight leading-[1.1] text-lightText dark:text-darkText mb-6 text-center">
                  <span className="text-lightSecondary dark:text-darkSecondary">
                    Win
                  </span>{" "}
                  millions in prizes
                </h2>
              </div>
              <div
                id="card-section-copy1"
                className="text-lightTextSubtle dark:text-darkTextSubtle font-fontLightWeight leading-normal"
              >
                Provably fair, on-chain games.
              </div>
              <div
                id="card-section-copy2"
                className="text-lightTextSubtle dark:text-darkTextSubtle font-fontLightWeight leading-normal mb-10"
              >
                Win big with PancakeSwap.
              </div>

              <div
                id="bottom-cards-container"
                className="flex flex-col lg:flex-row max-w-[600px] my-0 mx-auto"
              >
                <YellowCard />
                <PurpleCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
