import React, { useState } from "react";
import { FullButton } from "../../shared/buttons";
import "../../../style/index.css";
import "../../../style/bannerHero.css";
import bannerLottery from "../../../assets/images/png/lotteryBanner.png";
import bannerPerpetual from "../../../assets/images/png/perpetualBanner.png";
import board from "../../../assets/images/png/bannerBord.png";

function BannerHeroLeft() {
  return (
    <>
      <div className="banner_hero__perpetual_container ">
        <div className="left__perpetual_container p-5">
          <h2 className=" text-xl text-gold">Perpetual Futures</h2>
          <h2 className="text-xl text-white drop-shadow-lg font-bold colors-gold">
            UP TO 100X LEVERAGE
          </h2>
          <FullButton />
        </div>

        <div className="banner_right">
          <img className="w-80 mb-2" src={bannerPerpetual} />
        </div>
      </div>
    </>
  );
}

function BannerHeroRight() {
  return (
    <>
      <div className="banner_hero__lottery_container">
        <div className="left__lottery_container p-5">
          <h1 className="text-xl font-bold text-gold">time</h1>
          <h2 className="text-md text-white drop-shadow-lg font-bold">
            Win $110.720 in Lottery
          </h2>
          <img className="absolute" src={board} alt="board" />
          <FullButton />
        </div>
        <div>
          <span className="banner_right">
            <img className="mb-6" src={bannerLottery} />
          </span>
        </div>
      </div>
    </>
  );
}

export function BannerHero() {
  const [isShown, setIsShown] = useState("rightBanner");
  return (
    <>
      <div className="banner_hero__main_container">
        <div className="banner_hero__wrapper">
          <div className="banner_hero__inner_container">
            {isShown === "leftBanner" && <BannerHeroLeft />}
            {isShown === "rightBanner" && <BannerHeroRight />}

            <div className="flex flex-row justify-center h-100">
              <input
                type="button"
                onClick={() => setIsShown("rightBanner")}
                className="bg-white cursor-pointer rounded-l-lg w-10 h-2"
              />

              <input
                type="button"
                onClick={() => setIsShown("leftBanner")}
                className="bg-white cursor-pointer rounded-r-lg w-10 h-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
