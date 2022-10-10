import React, { useState, useEffect } from "react";
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
          <h2 className="text-[40px] text-white drop-shadow-lg font-bold colors-gold">
            UP TO 100X LEVERAGE
          </h2>
          <FullButton value="Trade now"/>
        </div>

        <span className="banner_right">
          <img className="w-80 mb-2" src={bannerPerpetual} />
        </span>
      </div>
    </>
  );
}

function BannerHeroRight() {
  return (
    <>
      <div className="banner_hero__lottery_container">
        <div className="left__lottery_container p-5">
          <h2 className="text-[20px] text-white drop-shadow-lg font-bold p-5">
            Win $110.720 in Lottery
          </h2>
          <div className="">
            <h1 className="absolute text-xl font-bold top-16 text-gold">
              time
            </h1>
            <img className="" src={board} alt="board" />
          </div>
          <FullButton />
        </div>
        <img className="w-full absolute" src={bannerLottery} />
      </div>
    </>
  );
}

export function BannerHero() {
  const [isShown, setIsShown] = useState(false);
  const handleIsShown = () => setIsShown(false);

  // useEffect(() => {
  //   const bannerInterval = setInterval(() => {
  //     handleIsShown();
  //   }, 6000);
  //   return () => {
  //     clearInterval(bannerInterval);
  //   };
  // }, [isShown]);

  return (
    <>
      <div className="banner_hero__main_container">
        <div className="banner_hero__wrapper">
          <div className="banner_hero__inner_container">
            {isShown == false && <BannerHeroLeft />}
            {isShown == true && <BannerHeroRight />}
            <div className="flex flex-row justify-center h-100">
              <input
                type="button"
                onClick={() => setIsShown(true)}
                className="bg-white cursor-pointer rounded-l-lg w-10 h-2"
              />

              <input
                type="button"
                onClick={() => setIsShown(false)}
                className="bg-white cursor-pointer rounded-r-lg w-10 h-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
