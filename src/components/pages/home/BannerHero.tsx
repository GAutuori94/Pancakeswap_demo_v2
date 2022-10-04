import React, { useState } from "react";
import { FullButton } from "../../shared/buttons";
import "../../../style/index.css";

import bannerLottery from "../../../assets/images/png/lotteryBanner.png";
import bannerPerpetual from "../../../assets/images/png/perpetualBanner.png";

function BannerHeroLeft() {
  return (
    <>
      <div className="relative flex flex-row">
        <div className=" flex flex-col justify-around">
          <h2 className=" text-base color-(var[#ED4B9E])">Win 11000$</h2>
          <h2 className="text-xl font-bold lightGradientGold">time</h2>
          <FullButton />
        </div>
        <div className="">
          <img className="w-full " src={bannerLottery} />
        </div>
      </div>
    </>
  );
}

function BannerHeroRight() {
  return (
    <>
      <div className="relative flex flex-row ">
        <div className=" flex flex-col justify-around">
          <h2 className=" text-base color-(var[#ED4B9E])">Perpetual Futures</h2>
          <h2 className="text-xl font-bold lightGradientGold">
            up to 100× leverage
          </h2>
          <FullButton />
        </div>

        <div className="flex flex-row align-center">
          <img className=" w-full items-center" src={bannerPerpetual} />
        </div>
      </div>
    </>
  );
}

export function BannerHero() {
  const [isShown, setIsShown] = useState("rightBanner");
  return (
    <>
      <div className="bg-[#7645D9] darkGradientViolet m-auto rounded-3xl mt-10 p-5 h ">
        <div className="flex flex-row relatve w-full">
          {isShown === "leftBanner" && <BannerHeroLeft />}
          {isShown === "rightBanner" && <BannerHeroRight />}
          {/* classe per switch */}
        </div>
        <div className="flex flex-row justify-center">
          <button
            onClick={() => setIsShown("rightBanner")}
            className="bg-white cursor-pointer p-1 rounded-l-lg w-10 "
          ></button>

          <button
            onClick={() => setIsShown("leftBanner")}
            className="bg-white cursor-pointer p-1 rounded-r-lg w-10"
          ></button>
        </div>
      </div>
    </>
  );
}
