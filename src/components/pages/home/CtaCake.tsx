import * as React from 'react';
import '../../../style/index.css';
import { FullButton, VoidButton } from '../../shared/buttons';
import ImageComponentCake from './ImageComponentCake';
import { CakeGrid } from './CakeGrid';

export default function CtaCake() {
  return (
    <section className='bg-lightBackground dark:bg-darkBackground w-full flex justify-center '>

      <div className='container_cake_fullcontent ml-[250px] w-[70%] h-[700px] flex flex-col justify-center '>
        <div className='container_cake_text_image'>
          <div className=' flex items-center '>

            <div className='flex flex-col flex-1 self-center justify-center '>
              <div>
                <h2 className='text-lightText text-fontSizeSubheader font-fontHeavyWeight leading-[1.1] mb-6 dark:text-darkText'>
                  <span className='text-lightSecondary'>CAKE </span> makes our
                  world <br /> go round.
                </h2>
                <div>
                  <p className=' text-darkTextSubtle mb-6 '>
                    CAKE token is at the heart of the PancakeSwap ecosystem.
                    <br />
                    Buy it, win it, farm it, spend it, stake it... heck, you can
                    even <br />
                    vote with it!
                  </p>
                </div>
                <div className='flex flex-row gap-4'>
                  <FullButton value='Buy CAKE' />
                  <VoidButton value='Learn' />
                </div>
              </div>
            </div>
            <div className='flex flex-row flex-1 items-center justify-b etween place-content-start relative py-10'>
              <ImageComponentCake />
            </div>
          </div>
        </div>
        <CakeGrid />
      </div>
    </section>
  );
}