import React from "react";
import { BannerHero } from "./BannerHero";
import CtaExplore from "./cta-explore";
import CtaTrade from "./cta-trade";

export default function Home() {
  return (
    <>
      <BannerHero />
      <CtaTrade />
      <CtaExplore />
    </>
  );
}
