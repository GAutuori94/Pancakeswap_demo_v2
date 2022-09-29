import React from "react";

import graphEarn1 from "../../assets/images/png/graphEarn1.png";
import graphEarn2 from "../../assets/images/png/graphEarn2.png";
import graphEarn3 from "../../assets/images/png/graphEarn3.png";

export default function ImageComponentGraphEarn() {
  return (
    <>
      <img
        className="absolute w-96 animate-floating animation-delay-100"
        src={graphEarn1}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-66"
        src={graphEarn2}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-33"
        src={graphEarn3}
      />
    </>
  );
}
