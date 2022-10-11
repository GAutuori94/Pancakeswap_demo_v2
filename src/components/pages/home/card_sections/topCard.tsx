import React from "react";

interface TopCardProps {
  children: JSX.Element;
  accentColor?: string;
  normalText: string;
  coloredText: string;
  subtleText: string;
}

export default function TopCard({
  children,
  accentColor,
  normalText,
  coloredText,
  subtleText,
}: TopCardProps) {
  return (
    <div
      id="card-border"
      className="bg-lightCardBorder dark:bg-darkCardBorder rounded-3xl overflow-hidden relative mb-4 h-fit px-px pb-1 lg:mr-4 lg:mb-0"
    >
      <div
        id="inner-box"
        className="w-full h-full bg-white rounded-3xl overflow-inherit bg-lightBackgroundAlt dark:bg-darkBackgroundAlt"
      >
        <div id="card-body" className="p-6">
          <div id="icon-container" className="absolute top-6 right-6">
            {children}
          </div>
          <div
            id="card-text"
            className="min-w-[232px] w-fit lg:min-h-[168px] lg:mt-16 flex flex-col box justify-end"
          >
            <h2 className="text-[32px] lg:text-[40px] leading-[1.1] font-fontHeavyWeight text-lightText dark:text-darkText">
              {normalText}
            </h2>
            <h2
              id={`accentColor-${accentColor}`}
              className="text-[32px] lg:text-[40px] mb-6 font-fontHeavyWeight leading-[1.1]"
            >
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
