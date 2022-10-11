import * as React from "react";
import "../../../style/index.css";
import { FullButton, VoidButton } from "../../shared/buttons";
import ImageComponentCoinTrade from "./ImageComponentCoinTrade";

export default function CtaTrade() {
  return (
    <section className="dark:bg-darkBackground w-100">
      <div className="cta_trade_container flex items-center max-w-screen-lg ">
        <div className="flex flex-col flex-1 self-center justify-center h-screen ">
          <h2 className="text-fontSizeSubheader font-fontHeavyWeight leading-[1.1] mb-6 dark:text-darkText">
            <span className="text-lightSecondary">Trade</span> anything. No
            registration, no hassle.
          </h2>
          <div>
            <p className=" text-lightTextSubtle mb-6">
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <FullButton value="Trade now"/>
            <VoidButton value="Learn" />
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
          <ImageComponentCoinTrade />
        </div>
      </div>
    </section>
  );
}
