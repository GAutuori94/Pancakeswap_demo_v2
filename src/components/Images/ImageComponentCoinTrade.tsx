import React from "react";
import coinTrade1 from "../../../assets/images/png/coinTrade1.png";
import coinTrade2 from "../../../assets/images/png/coinTrade2.png";
import coinTrade3 from "../../../assets/images/png/coinTrade3.png";

export default function ImageComponentCoinTrade() {
  return (
    <>
      <img
        className="absolute w-96 animate-floating animation-delay-100"
        src={coinTrade1}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-66"
        src={coinTrade2}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-33"
        src={coinTrade3}
      />
    </>
  );
}
