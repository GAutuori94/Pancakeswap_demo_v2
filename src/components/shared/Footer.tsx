import React from 'react';
import '../../style/footer.css';
const Footer: React.FC = () => {
  return (
    <footer>
      <div className='services'>
        <ul>
          <li>ABOUT</li>
          <li className='gold'>
            <a href=''>Contact</a>
          </li>
          <li>
            <a href=''>Brand</a>
          </li>
          <li>
            <a href=''>Blog</a>
          </li>
          <li>
            <a href=''>Community</a>
          </li>
          <li>
            <a href=''>Litepaper</a>
          </li>
          <li>
            <a href=''>
              <span></span>
            </a>
          </li>
          <li>
            <a href=''>Online Store</a>
          </li>
        </ul>
        <ul>
          <li>HELP</li>
          <li>
            <a href=''>Customer Support</a>
          </li>
          <li>
            <a href=''>Troubleshooting</a>
          </li>
          <li>
            <a href=''>Guides</a>
          </li>
        </ul>
        <ul>
          <li>DEVELOPER</li>
          <li>
            <a href=''>Github</a>
          </li>
          <li>
            <a href=''>Documentation</a>
          </li>
          <li>
            <a href=''>Bug Bounty</a>
          </li>
          <li>
            <a href=''>Audits</a>
          </li>
          <li>
            <a href=''>Careers</a>
          </li>
        </ul>
        <div className='logo'>
          <div className='svgContainer'>
            <div className='svgLogo'></div>
            <div className='svgPancakeSwap'></div>
          </div>
        </div>

        <div className='svgLogo'>
          <img
            src='../../assets/images/svg/utilities/pancakeWritten.svg'
            alt=''
          />
        </div>
      </div>
      <div className='partnerSvgIcons'>
        <div className='twitter'>
          <img src='../../assets/images/svg/social/twitter.svg' alt='' />
        </div>
        <div className='telegram'>
          <img src='../../assets/images/svg/social/telegram.svg' alt='' />
        </div>
        <div className='reddit'>
          <img src='../../assets/images/svg/social/twitter.svg' alt='' />
        </div>
        <div className='instagram'>
          <img src='../../assets/images/svg/social/' alt='' />
        </div>
        <div className='github'>
          <img src='../../assets/images/svg/social/gitHub.svg' alt='' />
        </div>
        <div className='discord'>
          <img src='../../assets/images/svg/social/discord.svg' alt='' />
        </div>
        <div className='medium'>
          <img src='../../assets/images/svg/social/medium.svg' alt='' />
        </div>
      </div>
      <div className='lasts'>
        <div className='modeSelector'>
          <div className='dayOrNight'>
            <label className='switch'>
              <input type='checkbox' id='darkToggle' className='darkToggle' />
              <span className='slider round'></span>
            </label>
          </div>

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
                Buy CAKE{' '}
                <img
                  src='../../assets/images/svg/utilities/arrowright.svg'
                  alt='arrow right'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
