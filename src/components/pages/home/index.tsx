import React from 'react';
import Footer from '../../shared/Footer';
import Nav from '../../shared/Nav';
import BottomCardSection from './card_sections/bottomCardSection';
import TopCardSection from './card_sections/topCardSection';
import CtaCake from './CtaCake';
import CtaExplore from './ctaExplore';
import CtaTrade from './ctaTrade';

export function Home() {
  return (
    <>
      <div className='relative w-full'>
        <div className='navContainer fixed top-0 left-0 '>
          <Nav />
        </div>
        <TopCardSection />
        <CtaTrade />
        <CtaExplore />
        <BottomCardSection />
        <CtaCake />
        <Footer />
      </div>
    </>
  );
}
