import React from "react";
import cakeChip1 from "../../../assets/images/png/cakeChip1.png";
import cakeChip2 from "../../../assets/images/png/cakeChip2.png";
import cakeChip3 from "../../../assets/images/png/cakeChip3.png";
import cakeChip4 from "../../../assets/images/png/cakeChip4.png";

// import cakeChip4 from "../../../assets/images/png/";

export default function ImageComponentCoinTrade() {
  return (
    <>
      <img
        className="absolute w-96 animate-floating animation-delay-100"
        src={cakeChip3}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-66"
        src={cakeChip1}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-33"
        src={cakeChip2}  
      />
      <img
        className="absolute w-96 animate-floating animation-delay-33"
        src={cakeChip4}  
      />
    </>
  );
}
