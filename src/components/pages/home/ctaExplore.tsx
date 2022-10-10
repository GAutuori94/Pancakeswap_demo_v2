import * as React from "react";
import ImageComponent from "./ImageComponent";
import { FullButton, OnlyBorderButton } from "../../shared/buttons";
import "../../../style/index.css";

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
            <FullButton />
            <OnlyBorderButton />
          </div>
        </div>
      </div>
    </section>
  );
}
