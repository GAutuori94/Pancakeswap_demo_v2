import React from "react";

import purpleBunnyIcon from "../../../assets/images/svg/icons/purpleBunnyIcon.svg";
import usersIcon from "../../../assets/images/svg/icons/users.svg";
import tradesIcon from "../../../assets/images/svg/icons/trades.svg";
import stackedIcon from "../../../assets/images/svg/icons/stacked.svg";

export default function TopCardSection() {
  return (
    <section id="top_card_section">
      <div className="top-cards-background">
        <img alt="purple bunny icon" src={purpleBunnyIcon} />
        <div className="card-section-text">
          <h2>Used by millions.</h2>
          <h2>Trusted with billions.</h2>
          <p>
            PancakeSwap has the most users of any decentralized platform, ever.
          </p>
          <p>
            And those users are now entrusting the platform with over $3.6
            billion in funds.
          </p>
          <p>Will you join them?</p>
        </div>
        <div className="top-cards-container">
          <div className="card-element">
            <div className="inner-box">
              <div className="card-body">
                <div className="symbol-container">
                  <img alt="users icon" src={usersIcon} />
                </div>
                <div className="card-text">
                  <h2>1.9 million</h2>
                  <h2>users</h2>
                  <div className="card-footer">in the last 30 days</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-element">
            <div className="inner-box">
              <div className="card-body">
                <div className="symbol-container">
                  <img alt="trades icon" src={tradesIcon} />
                </div>
                <div className="card-text">
                  <h2>23 million</h2>
                  <h2>trades</h2>
                  <div className="card-footer">made in the last 30 days</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-element">
            <div className="inner-box">
              <div className="card-body">
                <div className="symbol-container">
                  <img alt="stacks icon" src={stackedIcon} />
                </div>
                <div className="card-text">
                  <h2>$3.9 billion</h2>
                  <h2>staked</h2>
                  <div className="card-footer">Total Value Locked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
