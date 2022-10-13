import React, { useEffect, useState } from "react";
import { NoGraphIcon } from "./sideCardIcons";
import { useSymbols } from "../../../context/symbolsContext";

interface ChartSideCardProps {
  children: React.ReactNode;
}

export default function ChartSideCard(props: ChartSideCardProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex shrink-0 h-fit px-10">
        <div className="w-80">
          <div
            id="card-border"
            className="rounded-card w-full z-10 max-w-md bg-lightCardBorder dark:bg-darkCardBorder text-lightText dark:text-darkText relative overflow-hidden pt-px px-px pb-0.5"
          >
            <div
              id="card-background"
              className="w-full h-full overflow-inherit bg-lightBackgroundAlt dark:bg-darkBackgroundAlt rounded-card"
            >
              <div
                id="card-tabs"
                className="w-full bg-lightInput dark:bg-darkInput border-0 rounded-2xl inline-flex"
              >
                {/* TODO Tab animations are missing */}
                <button className="text-lightText dark:text-darkText bg-lightBackgroundAlt dark:bg-darkBackgroundAlt rounded-b-0 shadow-none grow shrink basis-auto relative items-center border-0 rounded-2xl cursor-pointer inline-flex text-fontSizeButton font-semibold justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-12 px-6">
                  Swap
                </button>
                <button className="text-lightTextSubtle dark:text-darkTextSubtle bg-lightInput dark:bg-darkInput ml-0.5 rounded-b-0 shadow-none grow shrink basis-auto relative items-center border-0 rounded-2xl cursor-pointer inline-flex text-fontSizeButton font-semibold justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-12 px-6">
                  StableSwap
                </button>
              </div>
              <div
                id="card-header"
                className="flex flex-col items-center p-6 w-full border-b border-lightCardBorder dark:border-darkCardBorder"
              >
                <div className="flex items-center justify-between w-full">
                  <button className="text-lightTextSubtle dark:text-darkTextSubtle w-8 relative items-center border-0 rounded-2xl cursor-pointer inline-flex text-fontSizeButton font-fontHeavyWeight justify-center tracking-[0.03em] leading-none opacity-100 outline-0 h-8 bg-transparent shadow-none">
                    <NoGraphIcon />
                  </button>
                </div>
              </div>
              <div
                id="card-body"
                className="flex flex-col relative justify-between p-4"
              >
                <div className="grid auto-rows-auto gap-y-2">
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex">{props.children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
