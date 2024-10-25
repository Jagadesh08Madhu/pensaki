import React from 'react';
import ImageSlider from './ImageSlider';

const Banner = () => {
  return (
    <section className='h-[90vh] p-10 flex'>
      <div className='flex flex-col lg:flex-row gap-10 items-center justify-center w-full'>

      <div className='lg:w-1/2 text-black order-2 lg:order-1'>
          <h1 className='text-4xl'>PENSAKI BLACKBOARD</h1>
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
