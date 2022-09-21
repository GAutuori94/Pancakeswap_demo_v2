import * as React from "react";
import "../../../style/cta-trade.css";
import BoxAnimation from "./BoxAnimation";

export default function CtaTrade() {
  return (
    <section id="CTA-trade_section">
      <div className="trade-section">
        <div className="trade-section-left">
          <h2>
            <span>Trade</span> anything. No registration, no hassle.
          </h2>
          <div>
            <p>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
          </div>
          <div className="bottom-cta">
            <button className="">Trade Now</button>
            <a href="" target="_blank">
              Learn
            </a>
          </div>
        </div>
        <div className="trade-section-right">
          <BoxAnimation />
        </div>
      </div>
    </section>
  );
}
