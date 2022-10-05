import * as React from "react";
import ImageComponent from "./ImageComponent";

import "./cta-explore.css";
export default function CtaExplore() {
  return (
    <section id="flex flex-col">
      <div className="container mx-auto flex flex-row max-w-screen-lg ">
        <div className="central-container">
          <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
            <ImageComponent />
          </div>
          <div className="side-text">
            <h2>
              <span className="text-purple-600">Earn</span> passive income with
              crypto.
            </h2>
            <p>PancakeSwap makes it easy to make your crypto work for you.</p>
          </div>
          <div className="buttons">
            <button type="button" className="blue-button">
              Explore
            </button>
            <a
              href="https://docs.pancakeswap.finance/products/yield-farming"
              className="docs-link"
            >
              Learn
            </a>
          </div>
        </div>
        {/* <h3 className="quotation-title">
          Top <span>Farms</span>
        </h3> 
        <div className="quotazioni">
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
      </div>
    </section>
  );
}
