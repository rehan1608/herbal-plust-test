import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { CartProvider } from './components/common/CartContext';
import ProductDetailsPage from './components/ProductDetails/Product1Details';
import '../src/App.css'
import Cart from './components/common/Cart';

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;
