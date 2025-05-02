import React from 'react';
import './FeaturedNewspaper.css';

const FeaturedNewspaper = ({ addToCart }) => {
  const featuredItem = {
    id: 'featured1',
    itemId: 'featured1',
    itemName: 'The Times - Moon Landing Special Edition (1969)',
    itemPrice: 1299,
    description: 'Extremely rare special edition of The Times covering the historic Apollo 11 moon landing in 1969. This perfectly preserved newspaper captures one of humanity\'s greatest achievements with original photographs and firsthand reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1541726260-e6b6a6a08b27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    features: [
      'Original 1969 print in excellent condition',
      'Complete coverage of the Apollo 11 mission',
      'Historic photographs of Neil Armstrong and Buzz Aldrin',
      'Includes special pullout section with detailed mission information',
      'Professionally preserved to maintain quality'
    ]
  };

  return (
    <div className="featured-container">
      <h2 className="featured-heading">Featured Collector's Item</h2>
      <div className="featured-newspaper">
        <div className="featured-image">
          <img src={featuredItem.imageUrl} alt={featuredItem.itemName} />
          <div className="featured-badge">RARE FIND</div>
        </div>
        <div className="featured-details">
          <h3 className="featured-title">{featuredItem.itemName}</h3>
          <div className="featured-price">₹{featuredItem.itemPrice}</div>
          <p className="featured-description">{featuredItem.description}</p>
          
          <div className="featured-features">
            <h4>Features:</h4>
            <ul>
              {featuredItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="featured-actions">
            <button 
              className="featured-btn-buy"
              onClick={() => addToCart(featuredItem)}
            >
              Buy Now
            </button>
            <button 
              className="featured-btn-cart"
              onClick={() => addToCart(featuredItem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewspaper;