import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';
import DisplayImg2 from "../assets/image-2.jpg";
import DisplayImg3 from "../assets/image-3.jpg";
import banner1 from "../assets/banner1.png"

const ImageCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    dotsClass: 'slick-dots', // Custom class for the dots container
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Delay between each slide in milliseconds
    beforeChange: (current, next) => setActiveSlide(next), // Update the active slide index
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            className="carousel-image"
            src={banner1}
            alt="Specia Offer"
          />
        </div>
        <div className="carousel-slide">
          <img
            className="carousel-image"
            src={DisplayImg2}
            alt="Get it Now"
          />
        </div>
        <div className="carousel-slide">
          <img
            className="carousel-image"
            src={DisplayImg3}
            alt="40% Off"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <div className="marker-dots">
        {Array.from({ length: 3 }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
