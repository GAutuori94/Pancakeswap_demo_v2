import * as React from "react";
import ImageComponentGraphEarn from "../../Images/ImageComponentGraphEarn";
export default function CtaExplore() {
  return (
    <section className="flex flex-col">
      <div className="container mx-auto flex flex-row max-w-screen-lg ">
        <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
          <ImageComponentGraphEarn />
        </div>
        <div className="flex flex-col flex-1 self-center justify-center h-screen ">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-purple-600">Earn</span> passive income with
            crypto.
          </h2>
          <div>
            <p className=" text-gray-500 text-lg font-bold mb-6">
              PancakeSwap makes it easy to make your crypto work for you.
            </p>
          </div>
          <div className="flex flex-row ">
            <button className="btn-main bg-green-400">Explore</button>
            <a
              className="text-green-400 btn-transparent"
              href=""
              target="_blank"
            >
              Learn
            </a>
          </div>
        </div>
      </div>
      {/* <div className="quotazioni">
      <div className="quotazione">
        <div className="quotation-name">OLE-BUSD-LD</div>
        <div className="quotation-percentage">171.902%</div>
        <div className="quotation-percentage-type">APY</div>
      </div>
      <div className="quotazione">
        <div className="quotation-name">TRIVIA-BNB LP</div>
        <div className="quotation-percentage">139.394%</div>
        <div className="quotation-percentage-type">APY</div>
      </div>
      <div className="quotazione">
        <div className="quotation-name">SDAO-BUSD LP</div>
        <div className="quotation-percentage">98.629%</div>
        <div className="quotation-percentage-type">APY</div>
      </div>
      <div className="quotazione">
        <div className="quotation-name">RPG-BUSD LP</div>
        <div className="quotation-percentage">88.430%</div>
        <div className="quotation-percentage-type">APY</div>
      </div>
      <div className="quotazione">
        <div className="quotation-name">DUET-CAKE LP</div>
        <div className="quotation-percentage">88.285%</div>
        <div className="quotation-percentage-type">APY</div>
      </div>
    </div> */}
    </section>
  );
}
