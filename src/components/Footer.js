import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>Old Newspaper Sell App</h3>
            <p>
              Preserving history one page at a time. We specialize in rare and vintage newspapers 
              from different eras, each with its own unique story and historical significance.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Collections</h4>
            <ul className="footer-links">
              <li><a href="#">Vintage Newspapers</a></li>
              <li><a href="#">Rare Editions</a></li>
              <li><a href="#">Newspaper Bundles</a></li>
              <li><a href="#">Special Editions</a></li>
              <li><a href="#">Historical Events</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> 123 Newspaper Lane, History City</li>
              <li><i className="fas fa-phone"></i> +91 9876543210</li>
              <li><i className="fas fa-envelope"></i> info@oldnewspapersell.com</li>
            </ul>
            <div className="newsletter">
              <h5>Subscribe to our Newsletter</h5>
              <div className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Old Newspaper Sell App. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;