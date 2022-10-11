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
          <div className="left__perpetual_container">
            <h2 className=" text-xl text-gold">Perpetual Futures</h2>
            <h2 className="text-[40px] text-white drop-shadow-lg font-bold colors-gold">
              UP TO 100X LEVERAGE
            </h2>
            <FullButton value="Trade now" />
          </div>

          <div className="left__img_container">
            <img className="perpetual" src={bannerPerpetual} />
          </div>
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
          <div className="left__lottery_container">
            <h2 className="text-[20px] text-white drop-shadow-xl font-bold mx-8 my-2">
              Win $110.720 in Lottery
            </h2>
            <div className="countdown_container">
              <h1 className="absolute text-[25px] font-bold text-gold">
                02d 15m 30s
              </h1>
              <img src={board} alt="board" />
            </div>
            <div className="flex flex-col mx-8">
              <FullButton value="Play now" />
            </div>
          </div>
          <div className="right__img_container">
            <img className="lottery" src={bannerLottery} />
          </div>
        </div>
      </div>
    </>
  );
}

export function BannerHero() {
  const [isShown, setIsShown] = useState(false);
  const handleIsShown = () => setIsShown(false);

  useEffect(() => {
    const bannerInterval = setInterval(() => {
      handleIsShown();
    }, 6000);
    return () => {
      clearInterval(bannerInterval);
    };
  }, [isShown]);

  return (
    <>
      <div className="banner_hero__main_container">
        {isShown == false && <BannerHeroLeft />}
        {isShown == true && <BannerHeroRight />}
        <div className="swiper__container">
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
