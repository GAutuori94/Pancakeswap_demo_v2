import React from 'react';
import '../../style/footer.css';
import twitter from '../../assets/images/svg/social/twitter.svg';
import telegram from '../../assets/images/svg/social/telegram.svg';
import reddit from '../../assets/images/svg/social/reddit.svg';
import instagram from '../../assets/images/svg/social/instagram.svg';
import github from '../../assets/images/svg/social/gitHub.svg';
import discord from '../../assets/images/svg/social/discord.svg';
import medium from '../../assets/images/svg/social/medium.svg';
import pancakeWhiteWritten from '../../assets/images/svg/utilities/pancakeWhiteWritten.svg';
import arrowright from '../../assets/images/svg/utilities/arrowright.svg';

import { developer, help, services } from './footerItems';
import Toggle from './Toggle';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
const {theme, toggleTheme} = useContext(ThemeContext); 
// import help from './footerItems';
// import developer from './footerItems';

type Link = {
  label: string;
  href: string;
};

const Footer: React.FC = () => {
  return (
    <footer className='bg-primary dark:bg-failure'>
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

            <button onClick={toggleTheme}><Toggle /></button>
            
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
              <p>$3.333</p>
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