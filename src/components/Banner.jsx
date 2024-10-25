import React from 'react';
import ImageSlider from './ImageSlider';

const Banner = () => {
  return (
    <section 
      className="relative min-h-screen bg-[url('./assets/banner.png')] bg-cover bg-center flex items-center pb-10 lg:pb-0" >

      <div className="flex flex-col mx-5 md:container md:mx-auto lg:flex-row gap-10 items-center justify-center w-full relative z-10 ">
        {/* Text content */}
        <div className="lg:w-1/2 text-white order-2 lg:order-1 flex flex-col gap-6">
          <h1 className="text-4xl lg:text-6xl font-bold py-0 lg:py-3">PENSAKI BLACKBOARD</h1>
          <p className="text-2xl lg:text-[30px] py-0 lg:py-3 leading-loose">
            Efficient, Reliable, and Effortless: Unlock the Potential of Pensaki.org Software Solution!
          </p>
          <div className='flex gap-5'>
            <a className='lg:px-10 py-4 border-2 px-5 rounded-lg hover:bg-white hover:text-black transition-all duration-700' href="">Our Products</a>
            <a className='lg:px-10 py-4 border-2 px-5 rounded-lg bg-white text-black hover:bg-transparent hover:text-white transition-all duration-700' href="">Global Support</a>
          </div>
        </div>

        {/* Image Slider component */}
        <div className="lg:w-1/2 order-1 lg:order-2">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
}

export default Banner;
