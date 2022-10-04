import React, { useState } from "react";
import { FullButton } from "../../shared/buttons";

import "../../../style/index.css";

import bannerLottery from "../../../assets/images/png/lotteryBanner.png";
import bannerPerpetual from "../../../assets/images/png/perpetualBanner.png";
import board from "../../../assets/images/png/bannerBord.png";

function BannerHeroLeft() {
  return (
    <>
      <div className="relative h-fit   flex flex-row p-5">
        <div className=" flex flex-col justify-between">
          <h2 className="text-base color-(var[#ED4B9E]) ">Win 11000$</h2>
          <img src={board} alt="board" />
          <h2 className="text-xl font-bold text-[lightGradientGold]">time</h2>
          <FullButton />
        </div>
        <span className="">
          <img className="w-full" src={bannerLottery} />
        </span>
      </div>
    </>
  );
}

function BannerHeroRight() {
  return (
    <>
      <div className="relative flex flex-row p-5 ">
        <div className=" flex flex-col justify-between">
          <h2 className=" text-xl text-gold">Perpetual Futures</h2>
          <h2 className="text-xl drop-shadow-lg border-darkSecondary font-bold colors-gold">
            UP TO 100X LEVERAGE
          </h2>
          <FullButton />
        </div>

        <span className="">
          <img className="w-80" src={bannerPerpetual} />
        </span>
      </div>
    </>
  );
}

export function BannerHero() {
  const [isShown, setIsShown] = useState("rightBanner");
  return (
    <>
      <div className="bg-[#7645D9] darkGradientViolet m-auto w-2/4 rounded-3xl mt-10 ">
        {isShown === "leftBanner" && <BannerHeroLeft />}
        {isShown === "rightBanner" && <BannerHeroRight />}
        {/* classe per switch */}
        <div className="flex flex-row justify-center pb-4">
          <input
            type="button"
            onClick={() => setIsShown("rightBanner")}
            className="bg-white cursor-pointer rounded-l-lg w-10 "
          />

          <input
            type="button"
            onClick={() => setIsShown("leftBanner")}
            className="bg-white cursor-pointer rounded-r-lg w-10 checked:bg-black "
          />
        </div>
      </div>
    </>
  );
}
