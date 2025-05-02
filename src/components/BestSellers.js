import React from 'react';
import { newspaperData } from './data/NewspaperData';
import './BestSellers.css';

const BestSellers = ({ addToCart }) => {
  return (
    <div className="bestsellers-container">
      <h2 className="section-title">Best Sellers</h2>
      <p className="section-description">
        Discover our collection of rare and vintage newspapers from different eras.
        Each piece carries a unique story and historical significance.
      </p>
      
      <div className="newspaper-grid">
        {newspaperData.map((newspaper) => (
          <div key={newspaper.id} className="newspaper-card">
            <div className="newspaper-image">
              <img 
                src={newspaper.imageUrl} 
                alt={newspaper.itemName} 
                className="newspaper-img"
              />
            </div>
            <div className="newspaper-info">
              <h3 className="newspaper-title">{newspaper.itemName}</h3>
              <p className="newspaper-description">{newspaper.description}</p>
              <div className="newspaper-price">₹{newspaper.itemPrice}</div>
              <div className="newspaper-actions">
                <button 
                  className="btn-buy"
                  onClick={() => addToCart(newspaper)}
                >
                  Buy Now
                </button>
                <button 
                  className="btn-cart"
                  onClick={() => addToCart(newspaper)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;