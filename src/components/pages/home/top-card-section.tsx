import React from "react";
import { UsersIcon, TradesIcon, StackedIcon } from "./card-icons";

import purpleBunnyIcon from "../../../assets/images/svg/icons/purpleBunnyIcon.svg";

interface TopCardProps {
  children: JSX.Element;
  color?: string;
  blackText: string;
  coloredText: string;
  subtleText: string;
}

/* TODO: there needs to be a way to style these cards conditionally,
  either with props or with custom styling rules */

function TopCard({
  children,
  blackText,
  coloredText,
  subtleText,
}: TopCardProps) {
  return (
    <div
      id="card-border"
      className="bg-cardBorder rounded-3xl overflow-hidden relative mr-4 mb-0 h-fit px-px pb-1"
    >
      <div id="inner-box" className="w-full h-full bg-white rounded-3xl">
        <div id="card-body" className="p-6">
          <div id="icon-container" className="absolute top-6 right-6">
            {children}
          </div>
          <div
            id="card-text"
            className="min-w-[232px] min-h-[168px] w-fit mt-16 flex flex-col box justify-end"
          >
            <h2 className="text-[40px] leading-[1.1] font-semibold">
              {blackText}
            </h2>
            <h2 className="mb-6 font-semibold leading-[1.1] text-[40px] text-secondary">
              {coloredText}
            </h2>
            <div
              id="card-footer"
              className="text-[1rem] leading-normal font-normal text-textSubtle"
            >
              {subtleText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopCardSection() {
  return (
    <section id="top-card-section">
      <div
        id="top-cards-background"
        className="bg-gradient-to-b from-[#fff] to-[#d7caec] py-12 flex flex-col items-center z-10 relative"
      >
        <img alt="purple bunny icon" src={purpleBunnyIcon} />
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
