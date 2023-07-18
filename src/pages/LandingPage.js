import React, { useContext } from 'react';
import Header from '../components/common/header';
import ImageCarousel from '../components/common/ImageCarousel';
import ProductsPage from '../components/Products/Products';
import TestimonialCarousel from '../components/testimonials/Testimonial';
import Footer from '../components/common/footer';
import { CartContext } from '../components/common/CartContext';

const LandingPage = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div>
      <Header cartCount={cartCount} />
      <ImageCarousel />
      <ProductsPage />
      <TestimonialCarousel />
      <Footer />
      {/* Other sections of your landing page */}
    </div>
  );
};

export default LandingPage;
