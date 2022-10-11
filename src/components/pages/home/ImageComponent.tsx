import React from "react";

import earnGraph1 from "../../../assets/images/png/graphEarn1.png";
import earnGraph2 from "../../../assets/images/png/graphEarn2.png";
import earnGraph3 from "../../../assets/images/png/graphEarn3.png";

export default function ImageComponent() {
  return (
    <>
      <img
        className="absolute w-96 animate-floating animation-delay-100"
        src={earnGraph1}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-66"
        src={earnGraph2}
      />
      <img
        className="absolute w-96 animate-floating animation-delay-33"
        src={earnGraph3}
      />
    </>
  );
}
