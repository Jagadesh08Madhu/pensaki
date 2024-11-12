import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../assets/logos/logo1.png'

const testimonials = [
  {
    image: logo1, // Replace with your image URL
    text: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    name: "Amaka Micheal",
    title: "Media Executive, Buying & Control",
  },
  {
    image: "https://via.placeholder.com/150", // Replace with your image URL
    text: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    name: "Amaka Micheal",
    title: "Media Executive, Buying & Control",
  },
  {
    image: "https://via.placeholder.com/150", // Replace with your image URL
    text: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    name: "Amaka Micheal",
    title: "Media Executive, Buying & Control",
  },
  {
    image: "https://via.placeholder.com/150", // Replace with your image URL
    text: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    name: "Amaka Micheal",
    title: "Media Executive, Buying & Control",
  },

  
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full overflow-hidden shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-lg mb-4">{testimonial.text}</p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-gray-300">{testimonial.title}</p>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
