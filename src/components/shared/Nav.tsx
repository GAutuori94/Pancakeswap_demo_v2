import React from "react";
import "../../style/Nav.css";
import { Link } from "react-router-dom";
import { intervals } from "./constants";
import logoPancake from "../../assets/images/svg/utilities/logoPancake.svg";
import logoNET from "../../assets/images/svg/utilities/logoNET.svg";
import ingranaggio from "../../assets/images/svg/utilities/ingranaggio.svg";
import { useState, useEffect } from "react";
import { useLazyFetch } from "../hooks/useLazyFetch";
import { linkWin, linkEarn, linksInfo, linksNFT, linkTrade } from "./menuItems";
import {
  ParsedBinanceKline,
  BinanceKline,
} from "../pages/trade/ChartLayoutComponent";
import { PancakeWrittenIcon } from "./navIcons";
import SettingsModal from "./settingsModal";

type Link = {
  label: string;
  href: string;
};

const Nav: React.FC = () => {
  const { data, trigger: fetchNewData } =
    useLazyFetch<BinanceKline[]>("/api/v3/klines?");
  const [selectedSymbol, setSelectedSymbol] = useState<string>("CAKEUSDT");
  const [parsedData, setParsedData] = useState<ParsedBinanceKline[]>([]);
  const [selectedInterval, setSelectedInterval] = useState<string>(
    intervals[intervals.length - 1]
  );
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const parsedData: ParsedBinanceKline[] = data.map((item) => {
        return {
          open: parseFloat(item[1]),
          high: parseFloat(item[2]),
          low: parseFloat(item[3]),
          close: parseFloat(item[4]),
          volume: parseFloat(item[5]),
          openTime: item[0],
          closeTime: item[6],
        };
      });
      setParsedData(parsedData);
    }
  }, [data]);

  useEffect(() => {
    const reqParams = new URLSearchParams({
      symbol: selectedSymbol,
      interval: selectedInterval,
    });

    fetchNewData({}, reqParams);
  }, [selectedInterval]);

  const [priceValue, setPriceValue] = useState<number | undefined>();

  useEffect(() => {
    setPriceValue(() => {
      const lastElement = parsedData?.pop();
      return lastElement?.close;
    });
  }, [parsedData]);

  const [hoverTrade, setHoverTrade] = useState<boolean>(false);
  const [hoverEarn, setHoverEarn] = useState<boolean>(false);
  const [hoverWin, setHoverWin] = useState<boolean>(false);
  const [hoverNFT, setHoverNFT] = useState<boolean>(false);
  const [hoverInfo, setHoverInfo] = useState<boolean>(false);

  const handleDropdownHoverTrade = (boolValue = false) => {
    setHoverTrade(boolValue);
  };
  const handleDropdownHoverEarn = (boolValue = false) => {
    setHoverEarn(boolValue);
  };
  const handleDropdownHoverWin = (boolValue = false) => {
    setHoverWin(boolValue);
  };
  const handleDropdownHoverNFT = (boolValue = false) => {
    setHoverNFT(boolValue);
  };
  const handleDropdownHoverInfo = (boolValue = false) => {
    setHoverInfo(boolValue);
  };

  return (
    <nav className="navbar dark:bg-darkBackgroundAlt dark:border-darkCardBorder">
      <SettingsModal
        isDialogOpen={isDialogOpen}
        closeModal={() => setIsDialogOpen(false)}
      />
      <div className="logo-container">
        <PancakeWrittenIcon />
      </div>
      <div className="hidden md:flex">
        <div
          className="links-container"
          onMouseEnter={() => handleDropdownHoverTrade(true)}
          onMouseLeave={() => handleDropdownHoverTrade(false)}
        >
          {linkTrade.map((link: Link, i) => {
            return (
              <ul key={i} className="links">
                <div className="nav-li">
                  <li className="nav-li">
                    <a href={link.href}>
                      {link.label}
                      {hoverTrade && (
                        <div
                          className={`dropdown  dark:bg-darkBackgroundAlt dark:border-darkCardBorder`}
                        >
                          {linkTrade.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul
                                className={`${item.href}-ul
                                dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                              bg-white
                              py-0.5
                              text-left
                              rounded-lg
                              m-0
                              border-none`}
                                key={index}
                              >
                                <li
                                  key={index}
                                  className={`${item.href}-li  dropdown-item
                                  dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                                  dark:hover:bg-darkTertiary
                                    text-sm
                                    py-2
                                    px-4
                                    font-normal
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent

                                    hover:bg-gray-100`}
                                >
                                  {item.label}
                                </li>
                                <hr />
                              </ul>
                            ));
                          })}
                        </div>
                      )}
                    </a>
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
        <div
          className="links-container"
          onMouseEnter={() => handleDropdownHoverWin(true)}
          onMouseLeave={() => handleDropdownHoverWin(false)}
        >
          {linkWin.map((link: Link, i) => {
            return (
              <ul key={i} className="links">
                <div className="nav-li">
                  <li className="nav-li">
                    <a href={link.href}>
                      {link.label}
                      {hoverWin && (
                        <div
                          className={`dropdown  dark:bg-darkBackgroundAlt dark:border-darkCardBorder`}
                        >
                          {linkWin.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul
                                className={`${item.href}-ul bg-white dark:bg-darkBackgroundAlt dark:border-darkCardBorder py-0.5 text-left rounded-lg m-0 border-none`}
                                key={index}
                              >
                                <li
                                  key={index}
                                  className={`${item.href}-li dropdown-item dark:bg-darkBackgroundAlt dark:border-darkCardBorder dark:hover:bg-darkTertiary text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100`}
                                >
                                  {item.label}
                                </li>
                              </ul>
                            ));
                          })}
                        </div>
                      )}
                    </a>
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
        <div
          className="links-container"
          onMouseEnter={() => handleDropdownHoverEarn(true)}
          onMouseLeave={() => handleDropdownHoverEarn(false)}
        >
          {linkEarn.map((link: Link, i) => {
            return (
              <ul
                key={i}
                className="links py-0.5 text-left rounded-lg m-0 border-none"
              >
                <div className="nav-li">
                  <li className="nav-li ">
                    <a href={link.href}>
                      {link.label}
                      {hoverEarn && (
                        <div
                          className={`dropdown  dark:bg-darkBackgroundAlt dark:border-darkCardBorder`}
                        >
                          {linkEarn.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul
                                className={`${item.href}-ul  bg-white  dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                              py-0.5
                              text-left
                              rounded-lg
                              m-0
                              border-none`}
                                key={index}
                              >
                                <li
                                  key={index}
                                  className={`${item.href}-li dropdown-item  dark:bg-darkBackgroundAlt dark:border-darkCardBorder dark:hover:bg-darkTertiary text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-gray-100`}
                                >
                                  {item.label}
                                </li>
                              </ul>
                            ));
                          })}
                        </div>
                      )}
                    </a>
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
        <div
          className="links-container"
          onMouseEnter={() => handleDropdownHoverNFT(true)}
          onMouseLeave={() => handleDropdownHoverNFT(false)}
        >
          {linksNFT.map((link: Link, i) => {
            return (
              <ul key={i} className="links">
                <div className="nav-li">
                  <li className="nav-li">
                    <a href={link.href}>
                      {link.label}
                      {hoverNFT && (
                        <div
                          className={`dropdown  dark:bg-darkBackgroundAlt dark:border-darkCardBorder`}
                        >
                          {linksNFT.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul
                                className={`${item.href}-ul  bg-white  dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                              py-0.5
                              text-left
                              rounded-lg
                              m-0
                              border-none`}
                                key={index}
                              >
                                <li
                                  key={index}
                                  className={`${item.href}-li dropdown-item  dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                                  dark:hover:bg-darkTertiary
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent

              hover:bg-gray-100`}
                                >
                                  {item.label}
                                </li>
                              </ul>
                            ));
                          })}
                        </div>
                      )}
                    </a>
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
        <div
          className="links-container"
          onMouseEnter={() => handleDropdownHoverInfo(true)}
          onMouseLeave={() => handleDropdownHoverInfo(false)}
        >
          {linksInfo.map((link: Link, i) => {
            return (
              <ul key={i} className="links">
                <div className="nav-li">
                  <li className="nav-li">
                    <a href={link.href}>
                      {link.label}
                      {hoverInfo && (
                        <div
                          className={`dropdown  dark:bg-darkBackgroundAlt dark:border-darkCardBorder`}
                        >
                          {linksInfo.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul
                                className={`${item.href}-ul  bg-white  dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                              py-0.5
                              text-left
                              rounded-lg
                              m-0
                              border-none`}
                                key={index}
                              >
                                <li
                                  key={index}
                                  className={`${item.href}-li dropdown-item  dark:bg-darkBackgroundAlt dark:border-darkCardBorder
                                  dark:hover:bg-darkTertiary
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent

              hover:bg-gray-100`}
                                >
                                  {item.label}
                                </li>
                              </ul>
                            ));
                          })}
                        </div>
                      )}
                    </a>
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
      </div>

      <div className="interactionsContainer">
        <img className="growing" src={logoPancake} alt="logo Pancake" />
        <p className="priceValueContainer">{`$${priceValue}`}</p>
        <button className="transparent">
          <img className="tra" src={logoNET} alt="logo net" />
        </button>
        <button onClick={() => setIsDialogOpen(true)}>
          <img className="tra" src={ingranaggio} alt="logo" />
        </button>
        <button className="connectWalletButton">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Nav;
