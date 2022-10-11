import * as React from "react";
import "../../../style/index.css";
import { FullButton, VoidButton } from "../../shared/buttons";
import ImageComponent from "./ImageComponent";

export default function CtaExplore() {
  return (
    <section className="lightGradientCardHeader dark:darkGradientCardHeader w-full flex justify-center ">
      <div className=" flex items-center w-[50%] h-[700px]">
        <div className="flex flex-row flex-1 items-center justify-b etween place-content-start relative py-10">
          <ImageComponent />
        </div>
        <div className="flex flex-col flex-1 self-center justify-center ">
          <h2 className="text-lightText text-fontSizeSubheader font-fontHeavyWeight leading-[1.1] mb-6 dark:text-darkText">
            <span className="text-lightSecondary">Earn   </span> passive income <br/> with crypto
          </h2>
          <div>
            <p className=" text-lightTextSubtle mb-6">
            PancakeSwap makes it easy to make your crypto work for you.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <FullButton value="Explore"/>
            <VoidButton value="Learn" />
          </div>
        </div>
      </div>
    </section>
  );
}
