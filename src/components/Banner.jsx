import React from 'react';
import ImageSlider from './ImageSlider';

const Banner = () => {
  return (
    <section className='h-[90vh] p-10 flex bg-gradient-to-b from-[#FFD323] to-white'>
      <div className='flex flex-col lg:flex-row gap-10 items-center justify-center w-full'>

      <div className='lg:w-1/2 text-black order-2 lg:order-1 flex flex-col gap-10'>
          <h1 className='text-6xl text-[#242F65] font-bold'>PENSAKI BLACKBOARD</h1>
          <p className='text-[33px]'>Efficient, Reliable, and Effortless: Unlock the Potential of Pensaki.org Software Solution</p>
        </div>

        {/* ImageSlider should appear first on mobile view */}
        <div className='lg:w-1/2 order-1 lg:order-2'>
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}

export default Banner;
