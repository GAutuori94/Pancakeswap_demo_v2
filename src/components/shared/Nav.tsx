import React from 'react';
import '../../style/Nav.css';
import { Link } from 'react-router-dom';
import * as data from './links.json';
import pancakeWritten from '../../assets/images/svg/utilities/pancakeWritten.svg';
import logoPancake from '../../assets/images/svg/utilities/logoPancake.svg';
import logoNET from '../../assets/images/svg/utilities/logoNET.svg';
import ingranaggio from '../../assets/images/svg/utilities/ingranaggio.svg';
const linksString = JSON.stringify(data);
import { useState } from 'react';


const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Nav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDropdownHover = () => {
    console.log(open);
    setOpen(true);
  };
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={pancakeWritten} alt='pancakelogo' />
        <div className='links-container'>
          {links.map((link: Link) => {
            return (
              <ul key={link.href} className='links'>
                <div className='nav-li'>
                  <li
                    onMouseOver={() => handleDropdownHover}
                    className='nav-li'
                  >
                    <Link key={link.href} to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                  {open && (
                    <ul>
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                      <li>Item 4</li>
                    </ul>
                  )}
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