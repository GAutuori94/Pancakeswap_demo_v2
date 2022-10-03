import * as React from "react";
import "../../../style/index.css";
import ImageComponent from "./ImageComponentCoinTrade";

export default function CtaTrade() {
  return (
    <section id="flex flex-col">
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
          <div className="flex flex-row ">
            <button className="btn-main bg-green-400">Trade Now</button>
            <a
              className="text-green-400 btn-transparent"
              href=""
              target="_blank"
            >
              Learn
            </a>
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
          <ImageComponent />
        </div>
      </div>
    </section>
  );
}
