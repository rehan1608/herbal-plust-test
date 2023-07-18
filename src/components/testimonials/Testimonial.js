import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';
import User from '../assets/user-img.png';

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 735,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel-container" id='reviews-section'>
      <h2 className="reviews-title">Reviews and Ratings</h2>
      <h3 className="reviews-subtitle">What our customers say about us</h3>
      <Slider className="testimonial-carousel-slider" {...settings}>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img src={User} alt="Testimonial 1" className="testimonial-image" />
            </div>
            <div className="testimonial-info">
              <h4 className="testimonial-name">John Doe</h4>
              <div className="testimonial-rating">4.5</div>
            </div>
            <p className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum diam vel justo ultrices pretium."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img src={User} alt="Testimonial 1" className="testimonial-image" />
            </div>
            <div className="testimonial-info">
              <h4 className="testimonial-name">John Doe</h4>
              <div className="testimonial-rating">4.5</div>
            </div>
            <p className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum diam vel justo ultrices pretium."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img src={User} alt="Testimonial 1" className="testimonial-image" />
            </div>
            <div className="testimonial-info">
              <h4 className="testimonial-name">John Doe</h4>
              <div className="testimonial-rating">4.5</div>
            </div>
            <p className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum diam vel justo ultrices pretium."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img src={User} alt="Testimonial 1" className="testimonial-image" />
            </div>
            <div className="testimonial-info">
              <h4 className="testimonial-name">John Doe</h4>
              <div className="testimonial-rating">4.5</div>
            </div>
            <p className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum diam vel justo ultrices pretium."
            </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-image-container">
              <img src={User} alt="Testimonial 1" className="testimonial-image" />
            </div>
            <div className="testimonial-info">
              <h4 className="testimonial-name">John Doe</h4>
              <div className="testimonial-rating">4.5</div>
            </div>
            <p className="testimonial-description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum diam vel justo ultrices pretium."
            </p>
          </div>
        </div>
        {/* Add more testimonial cards as needed */}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
