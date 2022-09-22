import * as React from "react";
import "../../../style/index.css";
import BoxAnimation from "./BoxAnimation";

export default function CtaTrade() {
  return (
    <section id="flex flex-col">
      <div className="flex flex-row items-center w-full">
        <div className="flex flex-col flex-1 items-center justify-center h-screen py-3 gap-6 md:py-4 md:gap-0">
          <h2 className="text-4xl font-black">
            <span>Trade</span> anything. No registration, no hassle.
          </h2>
          <div>
            <p className="">
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
          </div>
          <div className="">
            <button className="rounded-lg bg-purple-600 py-1   px-4 mx-4">
              Trade Now
            </button>
            <a
              className="border-2 border-purple-600 rounded-lg py-1 px-4 mx-4"
              href=""
              target="_blank"
            >
              Learn
            </a>
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center justify-between relative py-3 gap-6 md:py-4 md:gap-0">
          <BoxAnimation />
        </div>
      </div>
    </section>
  );
}
