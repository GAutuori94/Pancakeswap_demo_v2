import * as React from "react";
import "../../../style/cta-explore.css";
export default function CtaExplore() {
  return (
    <section id="CTA-explore_section">
      <div className="diagonal-divider"></div>
      <div className="inner-container">
        <div className="central-container">
          <div className="picture-container">
            <img
              src="./assets/images/png/asset-10.png"
              className="floatEL"
              alt="cake diagram"
            />
            <img
              src="./assets/images/png/asset 11.png"
              className="floatEL"
              alt="increasing bar chart"
            />
            <img
              src="./assets/images/png/asset 12.png"
              className="floatEL"
              alt="folder containing a coin"
            />
          </div>
          <div className="side-text">
            <h2>
              <span>Earn</span> passive income with crypto.
            </h2>
            <p>PancakeSwap makes it easy to make your crypto work for you.</p>
          </div>
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
        <h3 className="quotation-title">
          Top <span>Farms</span>
        </h3>
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
      </div>
    </section>
  );
}
