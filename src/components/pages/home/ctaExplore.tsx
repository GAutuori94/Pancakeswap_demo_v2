import * as React from "react";
import ImageComponent from "./ImageComponent";
import { FullButton, OnlyBorderButton } from "../../shared/buttons";
import "../../../style/index.css";

export default function CtaExplore() {
  return (
    <section id="flex flex-col">
      <div className="container mx-auto flex flex-row max-w-screen-lg ">
        <div className="flex flex-col flex-1 self-center justify-center h-screen ">
          <div className="flex flex-row flex-1 items-center justify-between place-content-start relative py-10 h-screen">
            <ImageComponent />
          </div>
          <div className="text-4xl font-bold mb-6">
            <h2>
              <span className="text-purple-600">Earn</span> passive income with
              crypto.
            </h2>
            <p className="text-gray-500 text-lg font-bold mb-6">
              PancakeSwap makes it easy to make your crypto work for you.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <FullButton />
            <OnlyBorderButton />
          </div>
        </div>
      </div>
    </section>
  );
}
