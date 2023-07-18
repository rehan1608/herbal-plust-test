import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./header.css"; // Import the associated CSS file
import logo from "../assets/logo.png"; // Import your company logo

const Header = ({ cartCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleProductsClick = () => {
    const productsSection = document.getElementById("products-section");
    productsSection.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleReviewsClick = () => {
    const reviewSection = document.getElementById("reviews-section");
    reviewSection.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("footer-section");
    contactSection.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="left-section">
            {/* Menu Icon */}
            <div className="menu-icon" onClick={handleMenuIconClick}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            {/* Logo */}
            <Link to="/" className="logo">
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#contact-us"
                className="nav-link"
                onClick={handleContactClick}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="#products-section"
                className="nav-link"
                onClick={handleProductsClick}
              >
                Products
              </Link>
            </li>
            {location.pathname.indexOf("/product") === -1 && location.pathname !== "/cart" && (
              <li>
                <Link
                  to="#reviews"
                  className="nav-link"
                  onClick={handleReviewsClick}
                >
                  Reviews
                </Link>
              </li>
            )}
          </ul>
          <div className="right-section">
            {/* Cart Icon */}
            <div className="cart-icon">
              <Link className="cart-link" to="/Cart">
                <FaShoppingCart />
                {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="nav-links-mobile">
          <li>
            <Link to="/" className="nav-link-mobile" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
            <li>
              <Link
                to="#products-section"
                className="nav-link-mobile"
                onClick={handleProductsClick}
              >
                Products
              </Link>
            </li>
          <li>
            <Link
              to="#contact-us"
              className="nav-link-mobile"
              onClick={handleContactClick}
            >
              Contact Us
            </Link>
          </li>
          {location.pathname.indexOf("/product") === -1 && location.pathname !== "/cart" &&(
            <li>
              <Link
                to="#reviews"
                className="nav-link-mobile"
                onClick={handleReviewsClick}
              >
                Reviews
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Header;
