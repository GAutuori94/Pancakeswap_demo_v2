import * as React from "react";
import "../../../style/index.css";
import { FullButton, VoidButton } from "../../shared/buttons";
import ImageComponentCoinTrade from "./ImageComponentCoinTrade";

export default function CtaTrade() {
  return (
    <section className="dark:bg-darkBackground w-full flex justify-center ">
      <div className=" flex items-center w-[50%] h-[700px]">
        <div className="flex flex-col flex-1 self-center justify-center ">
          <h2 className="text-fontSizeSubheader font-fontHeavyWeight leading-[1.1] mb-6 dark:text-darkText">
            <span className="text-lightSecondary">Trade   </span> anything. No <br />
            registration, no hassle.
          </h2>
          <div>
            <p className=" text-lightTextSubtle mb-6">
              Trade any token on BNB Smart Chain in seconds, just by <br/> connecting
              your wallet.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <FullButton value="Trade now"/>
            <VoidButton value="Learn" />
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center justify-b etween place-content-start relative py-10">
          <ImageComponentCoinTrade />
        </div>
      </div>
    </section>
  );
}
