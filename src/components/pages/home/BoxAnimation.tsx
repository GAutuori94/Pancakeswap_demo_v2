import React from "react";

import bunnyHero1 from "../../../assets/images/png/bunnyHero1.png";
import bunnyHero1star1 from "../../../assets/images/png/bunnyHero1star1.png";
import bunnyHero1star2 from "../../../assets/images/png/bunnyHero1star2.png";
import bunnyHero1star3 from "../../../assets/images/png/bunnyHero1star3.png";

export default function ImageComponent() {
  return (
    <>
      <img className="absolute w-96 animate-floating" src={bunnyHero1} />
      <img
        className="absolute w-96 animate-pulse animate-bounce"
        src={bunnyHero1star1}
      />
      <img
        className="absolute w-96 animate-pulse delay-300"
        src={bunnyHero1star3}
      />
      <img
        className="absolute w-96 animate-pulse delay-700"
        src={bunnyHero1star2}
      />
    </>
  );
}
