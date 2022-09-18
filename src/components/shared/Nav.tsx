import React from 'react';
import styles from '../../style/Nav.module.css';
import { Link } from 'react-router-dom';
import * as data from './links.json';

import logoPancake from '../../assets/images/svg/utilities/logoPancake.svg';
import logoNET from '../../assets/images/svg/utilities/logoNET.svg';
import ingranaggio from '../../assets/images/svg/utilities/ingranaggio.svg';

const img_1 = '../../assets/images/svg/utilities/pancakeWritten.svg';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  href: string;
};

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['logo-container']}>
        <img src={img_1} alt='pancakelogo' />
        <div className={styles['links-container']}>
          {links.map((link: Link) => {
            return (
              <ul key={link.href} className={styles['links']}>
                <div className="nav-li"></div>
                <li className={styles['nav-li']}>
                  <Link key={link.href} to={link.href}>
                    {link.label}
                  </Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={styles['interactionsContainer']}>
        
        <img className={styles['growing']} src={logoPancake} alt='logo Pancake' />
        <button className={styles['transparent'] }>
          <img className={styles['tra']} src={logoNET} alt='logo net' />
        </button>
        <img className={styles['tra']} src={ingranaggio} alt='logo' />

        <button className={styles['connectWalletButton']}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Nav;
