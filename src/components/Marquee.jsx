import React from 'react';
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';
import logo5 from '../assets/logos/logo5.png';
import logo6 from '../assets/logos/logo6.png';
import logo7 from '../assets/logos/logo7.png';
import logo8 from '../assets/logos/logo8.png';
import logo9 from '../assets/logos/logo9.png';
import logo10 from '../assets/logos/logo10.png';
import '../index.css'

export default function Marquee() {
  const ImageItems = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex animate-scroll gap-6 hover:animate-scroll-pause">
        {ImageItems.map((image, i) => (
          <img key={i} className="w-full h-auto" src={image} alt={`Logo ${i + 1}`} />
        ))}
        {/* Repeat the images to create a seamless loop */}
        {ImageItems.map((image, i) => (
          <img key={i + ImageItems.length} className="w-20 h-auto" src={image} alt={`Logo ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
