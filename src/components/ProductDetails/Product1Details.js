// ProductDetailsPage.js
import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import "../ProductDetails/Product1Details.css"
import Header from '../common/header';
import Footer from '../common/footer';
import Product1 from "../assets/product1.jpeg";
import ProductsPage from '../Products/Products';
import { CartContext } from '../common/CartContext';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const {cartCount,addToCart} = useContext(CartContext);

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
const products = product.find((product) => product.id === parseInt(productId));

  const handleAddToCart = () => {
    addToCart(products);
  };

  return (
    <>
    <Header cartCount={cartCount}/>
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={products.image} alt="Product" />
      </div>
      <div className="product-details-info">
        <h2>{products.name}</h2>
        <p>{products.details}</p>
        <div className="product-details-price">{products.price}</div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
    <ProductsPage />
    <Footer />
    </>
  );
};

export default ProductDetailsPage;
