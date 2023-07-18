import React, { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const generateUniqueKey = (productId) => {
    return `${productId}-${Date.now()}`;
  };

  const addToCart = (product) => {
    const itemKey = generateUniqueKey(product.id);
    const newItem = { ...product, key: itemKey };

    setCartItems((prevItems) => [...prevItems, newItem]);
    setCartCount((prevCount) => prevCount + 1);
    toast.success('Successfully added to cart');
  };

  const removeFromCart = (itemKey) => {
    const updatedItems = cartItems.filter((item) => item.key !== itemKey);
    setCartItems(updatedItems);
    setCartCount((prevCount) => prevCount - 1);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart, removeFromCart, clearCart }}>
      {children}
      <ToastContainer position="top-right" />
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

