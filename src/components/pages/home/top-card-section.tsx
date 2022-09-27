import React from "react";
import TopCard from "./top-card";

import {
  PurpleBunnyIcon,
  UsersIcon,
  TradesIcon,
  StackedIcon,
} from "./card-icons";

/* TODO: there needs to be a way to style these cards conditionally,
  either with props or with custom styling rules */

export default function TopCardSection(): JSX.Element {
  return (
    <section id="top-card-section">
      <div
        id="top-cards-background"
        className="bg-gradient-to-b from-[#fff] to-[#d7caec] py-12 flex flex-col items-center z-10 relative"
      >
        <PurpleBunnyIcon />
        <div id="card-section-text" className="text-center">
          <h2 className="font-semibold text-4xl">Used by millions.</h2>
          <h2 className="font-semibold text-4xl mb-8">
            Trusted with billions.
          </h2>
          <p className="font-normal text-textSubtle">
            PancakeSwap has the most users of any decentralized platform, ever.
          </p>
          <p className="font-normal text-textSubtle mb-5">
            And those users are now entrusting the platform with over $3.6
            billion in funds.
          </p>
          <p className="font-semibold text-textSubtle mb-8">
            Will you join them?
          </p>
        </div>
        <div id="top-cards-container" className="flex flex-row">
          <TopCard
            color="secondary"
            blackText="1.9 million"
            coloredText="users"
            subtleText="in the last 30 days"
          >
            <UsersIcon />
          </TopCard>
          <TopCard
            color="primary"
            blackText="23 million"
            coloredText="trades"
            subtleText="made in the last 30 days"
          >
            <TradesIcon />
          </TopCard>
          <TopCard
            color="failure"
            blackText="$4 billion"
            coloredText="staked"
            subtleText="Total Value Locked"
          >
            <StackedIcon />
          </TopCard>
        </div>
      </div>
    </section>
  );
}
