import React from 'react';
import '../../style/Nav.css';
import { Link } from 'react-router-dom';

import pancakeWritten from '../../assets/images/svg/utilities/pancakeWritten.svg';
import logoPancake from '../../assets/images/svg/utilities/logoPancake.svg';
import logoNET from '../../assets/images/svg/utilities/logoNET.svg';
import ingranaggio from '../../assets/images/svg/utilities/ingranaggio.svg';

import { useState } from 'react';

import { links } from './menuItems';

type Link = {
  label: string;
  href: string;
};

const Nav: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const handleDropdownHover = (boolValue = false) => {
    setHover(boolValue);
  };
  const subItems = links.map((item) => {
    return item.sub;
  });

  console.log(subItems);

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={pancakeWritten} alt='pancakelogo' />
        <div className='links-container'>
          {links.map((link: Link, index) => {
            return (
              <ul key={index} className='links'>
                <div className='nav-li'>
                  <li
                    onMouseEnter={() => handleDropdownHover(true)}
                    onMouseLeave={() => handleDropdownHover(false)}
                    className='nav-li'
                  >
                    <a className='link' key={index} href={link.href}>
                      {link.label}
                      {hover && (
                        <ul key={index}>
                          <li key={index}>
                            {subItems.map((item, index) => {
                              return <ul key={index}>
                                
                                <li key={index}>{item}</li>
                                </ul>;
                            })}
                          </li>
                        </ul>
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
