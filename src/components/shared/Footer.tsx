import React from 'react';
import '../../style/footer.css';
import twitter from '../../assets/images/svg/social/twitter.svg';
import telegram from '../../assets/images/svg/social/telegram.svg';
import reddit from '../../assets/images/svg/social/reddit.svg';
import instagram from '../../assets/images/svg/social/instagram.svg';
import github from '../../assets/images/svg/social/gitHub.svg';
import discord from '../../assets/images/svg/social/discord.svg';
import medium from '../../assets/images/svg/social/medium.svg';
import pancakeWhiteWritten from '../../assets/images/svg/utilities/pancakeWritten.svg';
import arrowright from '../../assets/images/svg/utilities/arrowright.svg';
import { useState, useEffect } from 'react';
import { useLazyFetch } from '../hooks/useLazyFetch';
import { intervals } from './constants';
import {
  ParsedBinanceKline,
  BinanceKline,
} from '../pages/trade/ChartLayoutComponent';

import { developer, help, services } from './footerItems';
import { Toggle } from './Toggle';
// import help from './footerItems';
// import developer from './footerItems';

type Link = {
  label: string;
  href: string;
};

const Footer: React.FC = () => {
  const { data, trigger: fetchNewData } =
  useLazyFetch<BinanceKline[]>('/api/v3/klines?');
  const [selectedSymbol, setSelectedSymbol] = useState<string>('CAKEUSDT');
  const [parsedData, setParsedData] = useState<ParsedBinanceKline[]>([]);
  const [selectedInterval, setSelectedInterval] = useState<string>(intervals[intervals.length - 1]);

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

  const priceValue = () => {
    const lastElement = parsedData.pop();
    return lastElement?.close;
  };
  return (
    <footer>
      <div className='services'>
        <div className='servicesContainer'>
          {services.map((link: Link, index) => {
            return (
              <ul key={index}>
                <li className='footer-li'>
                  <a href={link.href}> {link.label} </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className='developerContainer'>
          {developer.map((link: Link, index) => {
            return (
              <ul key={index}>
                <li>
                  <a href={link.href}> {link.label} </a>
                </li>
              </ul>
            );
          })}
        </div>
        <div className='helpContainer'>
          {help.map((link: Link, index) => {
            return (
              <ul key={index} className='developer'>
                <li>
                  <a href={link.href}> {link.label} </a>
                </li>
              </ul>
            );
          })}
        </div>

        <div>
          <ul>
            <li>
              <a>
                <img src={pancakeWhiteWritten} alt='pancakelogo' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {
        <div className='partnerSvgIcons'>
          <div className='twitter'>
            <a href=''>
              <img src={twitter} alt='twitter icon' />
            </a>
          </div>
          <div className='telegram'>
            <a href=''>
              <img src={telegram} alt='' />
            </a>
          </div>
          <div className='reddit'>
            <a href=''>
              <img src={reddit} alt='' />
            </a>
          </div>
          <div className='instagram'>
            <a href=''>
              <img src={instagram} alt='' />
            </a>
          </div>
          <div className='github'>
            <a href=''>
              <img src={github} alt='' />
            </a>
          </div>
          <div className='discord'>
            <a href=''>
              <img src={discord} alt='' />
            </a>
          </div>
          <div className='medium'>
            <a href=''>
              <img src={medium} alt='' />
            </a>
          </div>
        </div>
      }

      {
        <div className='lasts'>
          <div className='modeSelector'>
            <Toggle />
            <div className='languageSelector'>
              <div className='net'>
                <p>EN</p>
              </div>

              <div className='language'></div>
            </div>
          </div>

          <div className='selectors'>
            <div className='buttonContainer'>
              <div className='svg'></div>
              <p className='priceValue'>{`$${priceValue()}`}</p>
              <div className='buyCake'>
                <button>
                  Buy CAKE
                  <img src={arrowright} alt='arrow right' />
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </footer>
  );
};

export default Footer;
