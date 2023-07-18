import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../common/CartContext';
import '../Products/Products.css';
import Product1 from '../assets/product1.jpeg';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = [
    {
      id: 1,
      name: 'Product 1',
      image: Product1,
      details: 'Product details description goes here.',
      price: '$19.99',
    },
    {
      id: 2,
      name: 'Product 2',
      image: Product1,
      details: 'Product details description goes here.',
      price: '$24.99',
    },
    {
      id: 3,
      name: 'Product 3',
      image: Product1,
      details: 'Product details description goes here.',
      price: '$29.99',
    },
    {
      id: 4,
      name: 'Product 4',
      image: Product1,
      details: 'Product details description goes here.',
      price: '$14.99',
    },
    {
      id: 5,
      name: 'Product 5',
      image: Product1,
      details: 'Product details description goes here.',
      price: '$39.99',
    },
  ];

  const handleDetailsClick = (productId) => {
    navigate(`/product/${productId}`);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleAddToCart = (productId) => {
    const selectedProduct = product.find((item) => item.id === productId);
    addToCart(selectedProduct);
  };

  return (
    <div id="products-section" className="products-page">
      <h1 className="products-title">Our Products</h1>
      <div className="product-containers">
        {product.map((item) => (
          <div className="product-container" key={item.id}>
            <img src={item.image} alt={`Product ${item.id}`} className="product-image" />
            <div className="product-details">
              <h2>{item.name}</h2>
              <button className="details-button" onClick={() => handleDetailsClick(item.id)}>
                Details
              </button>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
