import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import "./footer.css";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", checkScrollTop);
      return () => {
        window.removeEventListener("scroll", checkScrollTop);
      };
    });
  
    return (
      <div
        className="scroll-to-top"
        onClick={scrollToTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        <FaArrowUp className="scroll-to-top-icon" />
      </div>
    );
  };

const Footer = () => {
  return (
    <div className="footer" id="footer-section">
      <div className="footer-left">
        <div className="footer-social">
           <a href="https://google.com" target="blank"><FaFacebook className="footer-social-icon" /></a> 
          <FaInstagram className="footer-social-icon" />
          <FaYoutube className="footer-social-icon" />
        </div>
        <div className="footer-contact">
          <FaPhone className="footer-icon" />
          <p>123-456-7890</p>
        </div>
        <div className="footer-contact">
          <FaEnvelope className="footer-icon" />
          <p>example@example.com</p>
        </div>
      </div>
      <div className="footer-right">
        <h3>Address</h3>
        <p className="footer-address">123 Street, City, Country</p>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Footer;
