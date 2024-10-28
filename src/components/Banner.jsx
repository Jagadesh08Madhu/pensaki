import React from 'react';
import home1 from '../assets/home1.png'

const Banner = () => {
  return (
    <section 
      className="relative min-h-screen  bg-cover bg-center flex items-center pb-10 lg:pb-0" >

      <div className="flex flex-col mx-5 md:container md:mx-auto lg:flex-row gap-10 items-center justify-center w-full relative z-10 ">
        {/* Text content */}
        <div className="lg:w-1/2 text-black order-2 lg:order-1 flex flex-col gap-6 animate-wiggle">
          <h1 className="text-[28px] lg:text-[54px] font-bold py-0 lg:py-3">PENSAKI BLACKBOARD</h1>
          <p className="text-xl lg:text-[30px] py-0 lg:py-3 leading-loose">
            Efficient, Reliable, and Effortless: Unlock the Potential of Pensaki.org Software Solution!
          </p>
          <div className='flex gap-5'>
            <a className='lg:px-10 py-4 border-2 border-black px-5 rounded-lg hover:bg-white hover:text-black transition-all duration-700 hover:scale-105' href="">Our Products</a>
            <a className='lg:px-10 py-4 border-2 border-black bg-black px-5 rounded-lg text-white  hover:bg-transparent hover:text-black transition-all hover:scale-105 duration-700' href="">Global Support</a>
          </div>
        </div>

        {/* Image Slider component */}
        <div className="lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0 p-0 lg:p-14 lg: lg:animate-right animate-wiggle">
          <img className='h-auto' src={home1} alt="home1" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
