import React, { useContext, useState } from "react";
import axios from 'axios'
import Header from "./header";
import ProductsPage from "../Products/Products";
import Footer from "./footer";
import { CartContext } from "./CartContext";
import "./Cart.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cartItems, cartCount, removeFromCart, clearCart } =
    useContext(CartContext);

  const handleRemoveFromCart = (itemKey) => {
    removeFromCart(itemKey);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += parseFloat(item.price.replace("$", ""));
    });
    return total.toFixed(2);
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    landmark: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email, address, landmark, pincode } = formData;
    const totalAmount = calculateTotal();

    // Create an array of cart details with name and price
    const cartDetails = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
    }));

    const orderData = {
      name,
      phone,
      email,
      address,
      landmark,
      pincode,
      cartDetails,
      totalAmount,
    };

    try {
      // Make a POST request to your serverless function
      await axios.post('/.netlify/functions/sendOrderEmail', orderData);

      // Show success toast notification
      toast.success('Order Placed Successfully, We\'ll contact You');

      // Clear cart and form fields
      clearCart();
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        landmark: "",
        pincode: "",
      });
    } catch (error) {
      console.error('Error placing order:', error);

      // Show error toast notification
      toast.error('Failed to place order. Please try again.');
    }
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <div className="cart-container">
        <h2 className="cart-title">My Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.key} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">{item.price}</div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => handleRemoveFromCart(item.key)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">Total: ${calculateTotal()}</div>
            <button className="clear-cart-button" onClick={handleClearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
      <div className="order-form">
        <h2>Order Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="landmark">Landmark (Optional)</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pin Code</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cart-details">
            <h3>Cart Details</h3>
            {cartItems.map((item) => (
              <div key={item.key} className="cart-item-details">
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            ))}
            <div className="cart-total">Total: ${calculateTotal()}</div>
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </form>
      </div>
      <ProductsPage />
      <Footer />
    </>
  );
  <ToastContainer position="top-right" />
};

export default Cart;
