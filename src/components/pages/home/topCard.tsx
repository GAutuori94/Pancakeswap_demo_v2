import React from "react";

interface TopCardProps {
  children: JSX.Element;
  color?: string;
  blackText: string;
  coloredText: string;
  subtleText: string;
}

export default function TopCard({
  children,
  blackText,
  coloredText,
  subtleText,
}: TopCardProps) {
  return (
    <div
      id="card-border"
      className="bg-cardBorder rounded-3xl overflow-hidden relative mr-4 mb-0 h-fit px-px pb-1"
    >
      <div
        id="inner-box"
        className="w-full h-full bg-white rounded-3xl overflow-inherit"
      >
        <div id="card-body" className="p-6">
          <div id="icon-container" className="absolute top-6 right-6">
            {children}
          </div>
          <div
            id="card-text"
            className="min-w-[232px] min-h-[168px] w-fit mt-16 flex flex-col box justify-end"
          >
            <h2 className="text-[40px] leading-[1.1] font-fontHeavyWeight">
              {blackText}
            </h2>
            <h2 className="mb-6 font-fontHeavyWeight leading-[1.1] text-[40px]">
              {coloredText}
            </h2>
            <div
              id="card-footer"
              className="text-[1rem] leading-normal font-fontLightWeight text-lightTextSubtle dark:text-darkTextSubtle"
            >
              {subtleText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
