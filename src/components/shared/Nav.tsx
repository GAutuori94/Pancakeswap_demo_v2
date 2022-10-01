import React from 'react';
import '../../style/Nav.css';
import { Link } from 'react-router-dom';

import pancakeWritten from '../../assets/images/svg/utilities/pancakeWritten.svg';
import logoPancake from '../../assets/images/svg/utilities/logoPancake.svg';
import logoNET from '../../assets/images/svg/utilities/logoNET.svg';
import ingranaggio from '../../assets/images/svg/utilities/ingranaggio.svg';

import { useState } from 'react';

import { linkWin, linkEarn, linksInfo, linksNFT, linkTrade } from './menuItems';

type Link = {
  label: string;
  href: string;
};

const Nav: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const handleDropdownHover = (boolValue = false) => {
    setHover(boolValue);
  };

  return (
    
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={pancakeWritten} alt='pancakelogo' />
        <div className='links-container'>
          {linkTrade.map((link: Link, i) => {
            return (
              <ul key={i} className='links'>
                <div className='nav-li'>
                  <li className='nav-li'>
                    <a
                      href={link.href}
                      onMouseEnter={() => handleDropdownHover(true)}
                      onMouseLeave={() => handleDropdownHover(false)}
                    > 
                      {link.label}
                      { hover && (
                        <div className={`dropdown`}>
                          {linkTrade.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul className={`${item.href}-ul`} key={index}>
                                <li key={index} className={`${item.href}-li`}>
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
        <div className='links-container'>
          {linkWin.map((link: Link, i) => {
            return (
              <ul key={i} className='links'>
                <div className='nav-li'>
                  <li className='nav-li'>
                    <a
                      href={link.href}
                      onMouseEnter={() => handleDropdownHover(true)}
                      onMouseLeave={() => handleDropdownHover(false)}
                    >
                      {link.label}
                      {hover && (
                        <div className={`dropdown`}>
                          {linkWin.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul className={`${item.href}-ul`} key={index}>
                                <li key={index} className={`${item.href}-li`}>
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
        <div className='links-container'>
          {linkEarn.map((link: Link, i) => {
            return (
              <ul key={i} className='links'>
                <div className='nav-li'>
                  <li className='nav-li'>
                    <a
                      href={link.href}
                      onMouseEnter={() => handleDropdownHover(true)}
                      onMouseLeave={() => handleDropdownHover(false)}
                    >
                      {link.label}
                      {hover && (
                        <div className={`dropdown`}>
                          {linkEarn.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul className={`${item.href}-ul`} key={index}>
                                <li key={index} className={`${item.href}-li`}>
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
        <div className='links-container'>
          {linksNFT.map((link: Link, i) => {
            return (
              <ul key={i} className='links'>
                <div className='nav-li'>
                  <li className='nav-li'>
                    <a
                      href={link.href}
                      onMouseEnter={() => handleDropdownHover(true)}
                      onMouseLeave={() => handleDropdownHover(false)}
                    >
                      {link.label}
                      {hover && (
                        <div className={`dropdown`}>
                          {linksNFT.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul className={`${item.href}-ul`} key={index}>
                                <li key={index} className={`${item.href}-li`}>
                                  {item.label}
                                </li>
                              </ul>
                            ));
                          })}
                        </div>
                      )}
                      {hover && (
                        <div className={`dropdown`}>
                          {linksNFT.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul className={`${item.href}-ul`} key={index}>
                                <li key={index} className={`${item.href}-li`}>
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
        <div className='links-container'>
          {linksInfo.map((link: Link, i) => {
            return (
              <ul key={i} className='links'>
                <div className='nav-li'>
                  <li className='nav-li'>
                    <a
                      href={link.href}
                      onMouseEnter={() => handleDropdownHover(true)}
                      onMouseLeave={() => handleDropdownHover(false)}
                    >
                      {link.label}
                      {hover && (
                        <div className={`dropdown`}>
                          {linksInfo.map((item) => {
                            return item.sub?.map((item, index) => (
                              <ul className={`${item.href}-ul`} key={index}>
                                <li key={index} className={`${item.href}-li`}>
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
      <div className='interactionsContainer'>
        <img className='growing' src={logoPancake} alt='logo Pancake' />
        <button className='transparent'>
          <img className='tra' src={logoNET} alt='logo net' />
        </button>
        <img className='tra' src={ingranaggio} alt='logo' />

        <button className='connectWalletButton'>Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Nav;
