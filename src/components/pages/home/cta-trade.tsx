import * as React from "react";
import "../../../style/index.css";
import { FullButton, OnlyBorderButton } from "../../shared/buttons";
import ImageComponentCoinTrade from "./ImageComponentCoinTrade";

export default function CtaTrade() {
  return (
    <section className="flex flex-col">
      <div className="container mx-auto flex flex-row max-w-screen-lg ">
        <div className="flex flex-col flex-1 self-center justify-center h-screen ">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-purple-600">Trade</span> anything. No
            registration, no hassle.
          </h2>
          <div>
            <p className=" text-gray-500 text-lg font-bold mb-6">
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <FullButton />
            <OnlyBorderButton />
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
          <ImageComponentCoinTrade />
        </div>
      </div>
    </section>
  );
}
