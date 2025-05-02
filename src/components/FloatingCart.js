import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingCart.css';

const FloatingCart = ({ cartItems }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <Link to="/cart" className="floating-cart">
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </div>
    </Link>
  );
};

export default FloatingCart;