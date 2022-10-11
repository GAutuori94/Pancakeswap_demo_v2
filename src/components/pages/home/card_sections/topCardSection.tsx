import React from "react";
import TopCard from "./topCard";

import {
  PurpleBunnyIcon,
  UsersIcon,
  TradesIcon,
  StackedIcon,
} from "./cardIcons";
export default function TopCardSection(): JSX.Element {
  return (
    <section
      id="top-cards-section"
      className="lightGradientTopCardSection dark:darkGradientTopCardSection py-12 flex flex-col items-center z-10 relative"
    >
      <div
        id="top-cards-responsive-box"
        className="w-full min-h-[auto] p-4 max-w-[1200px] sm:px-6 md:py-8 xl:py-12"
      >
        <div
          id="top-cards-container"
          className="flex flex-col justify-center items-center"
        >
          <PurpleBunnyIcon />
          <div id="card-section-text" className="text-center">
            <h2 className="font-fontHeavyWeight text-[2.5rem] leading-[1.1] text-lightText dark:text-darkText">
              Used by millions.
            </h2>
            <h2 className="font-fontHeavyWeight text-[2.5rem] leading-[1.1] mb-8 text-lightText dark:text-darkText">
              Trusted with billions.
            </h2>
            <p className="font-fontLightWeight text-lightTextSubtle dark:text-darkTextSubtle">
              PancakeSwap has the most users of any decentralized platform,
              ever.
            </p>
            <p className="font-normal text-lightTextSubtle dark:text-darkTextSubtle mb-5">
              And those users are now entrusting the platform with over $3.6
              billion in funds.
            </p>
            <p className="font-fontHeavyWeight text-lightTextSubtle dark:text-darkTextSubtle mb-8">
              Will you join them?
            </p>
          </div>
          <div id="top-cards-container" className="flex flex-col lg:flex-row">
            <TopCard
              accentColor="secondary"
              normalText="1.9 million"
              coloredText="users"
              subtleText="in the last 30 days"
            >
              <UsersIcon />
            </TopCard>
            <TopCard
              accentColor="primary"
              normalText="23 million"
              coloredText="trades"
              subtleText="made in the last 30 days"
            >
              <TradesIcon />
            </TopCard>
            <TopCard
              accentColor="failure"
              normalText="$4 billion"
              coloredText="staked"
              subtleText="Total Value Locked"
            >
              <StackedIcon />
            </TopCard>
          </div>
        </div>
      </div>
    </section>
  );
}
