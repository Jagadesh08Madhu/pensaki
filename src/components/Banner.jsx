import React from 'react';
import ImageSlider from './ImageSlider';

const Banner = () => {
  return (
    <section className='h-[100vh] p-10 bg-[url(./assets/banner.png)] bg-opacity-100 bg-center relative' >
      <div className='absolute inset-0 mx-7 md:mx-auto md:container  flex'>
         <div className='flex flex-col lg:flex-row gap-10 items-center justify-center w-full'>

        <div className='lg:w-1/2 text-white order-2 lg:order-1 flex flex-col gap-10'>
            <h1 className='text-6xl text-[#ffffff] font-bold'>PENSAKI BLACKBOARD</h1>
            <p className='text-[33px]'>Efficient, Reliable, and Effortless: Unlock the Potential of Pensaki.org Software Solution !</p>
        </div>

        {/* ImageSlider should appear first on mobile view */}
        <div className='lg:w-1/2 order-1 lg:order-2'>
            <ImageSlider />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
