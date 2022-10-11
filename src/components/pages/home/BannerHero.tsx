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
        <div className="left_banner_inner_container">
          <div className="left__perpetual_container p-5">
            <h2 className=" text-xl text-gold">Perpetual Futures</h2>
            <h2 className="text-[40px] text-white drop-shadow-lg font-bold colors-gold">
              UP TO 100X LEVERAGE
            </h2>
            <FullButton value="Trade now" />
          </div>

          <span className="left__img_container">
            <img className="perpetual w-96" src={bannerPerpetual} />
          </span>
        </div>
      </div>
    </>
  );
}

function BannerHeroRight() {
  return (
    <>
      <div className="banner_hero__lottery_container">
        <div className="right_banner_inner_container">
          <div className="left__lottery_container ">
            <h2 className="text-[20px] text-white drop-shadow-lg font-bold p-5">
              Win $110.720 in Lottery
            </h2>
            <div className="countdown_container">
              <h1 className="absolute text-[25px] font-bold left-24 text-gold">
                {Math.random()}
              </h1>
              <img className="" src={board} alt="board" />
            </div>
            <FullButton value="Play now" />
          </div>
          <span className="right__img_container">
            <img className="lottery w-100" src={bannerLottery} />
          </span>
        </div>
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
        {isShown == false && <BannerHeroLeft />}
        {isShown == true && <BannerHeroRight />}
        <div className="swiper__container flex flex-row justify-center">
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
    </>
  );
}
