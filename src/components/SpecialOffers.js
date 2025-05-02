import React, { useState } from 'react';
import './SpecialOffers.css';

const SpecialOffers = ({ addToCart }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const offers = [
    {
      id: 'offer1',
      itemId: 'offer1',
      title: 'Historical Bundle Deal',
      description: 'Get 3 vintage newspapers from the 1970s at a special discounted price',
      originalPrice: 1499,
      offerPrice: 999,
      discount: '33%',
      imageUrl: './image/im12.jpeg',
      expiryDate: '2023-12-31',
      badge: 'Limited Time'
    },
    {
      id: 'offer2',
      itemId: 'offer2',
      title: 'Collector\'s Special',
      description: 'Rare newspaper editions from major historical events with certificate of authenticity',
      originalPrice: 2999,
      offerPrice: 1999,
      discount: '33%',
      imageUrl: './image/im13.jpeg',
      expiryDate: '2023-12-15',
      badge: 'Best Seller'
    },
    {
      id: 'offer3',
      itemId: 'offer3',
      title: 'First-Time Buyer Discount',
      description: 'Special discount for first-time buyers on any newspaper purchase',
      originalPrice: 599,
      offerPrice: 399,
      discount: '33%',
      imageUrl: './image/im14.jpeg',
      expiryDate: '2023-12-20',
      badge: 'New Customers'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="special-offers-container">
      <div className="offers-header">
        <h2>Special Offers & Deals</h2>
        <p>Limited time offers on our rare and vintage newspaper collections</p>
      </div>
      
      <div className="offers-grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="offer-badge">{offer.badge}</div>
            <div className="offer-image">
              <img src={offer.imageUrl} alt={offer.title} />
            </div>
            <div className="offer-content">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-description">{offer.description}</p>
              <div className="offer-price">
                <span className="original-price">₹{offer.originalPrice}</span>
                <span className="offer-price-value">₹{offer.offerPrice}</span>
                <span className="discount-tag">Save {offer.discount}</span>
              </div>
              <div className="offer-expiry">
                Offer ends: {new Date(offer.expiryDate).toLocaleDateString()}
              </div>
              <div className="offer-actions">
                <button 
                  className="btn-offer-buy"
                  onClick={() => addToCart({
                    ...offer,
                    itemName: offer.title,
                    itemPrice: offer.offerPrice
                  })}
                >
                  Buy Now
                </button>
                <button 
                  className="btn-offer-cart"
                  onClick={() => addToCart({
                    ...offer,
                    itemName: offer.title,
                    itemPrice: offer.offerPrice
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="newsletter-offer">
        <div className="newsletter-content">
          <h3>Subscribe for Exclusive Offers</h3>
          <p>Be the first to know about new arrivals, special promotions, and exclusive discounts.</p>
          {isSubscribed ? (
            <div className="subscription-success">
              <i className="fas fa-check-circle"></i>
              <p>Thank you for subscribing! Check your email for a special discount code.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
        <div className="newsletter-image">
          <img src="./image/im15.jpeg" alt="Newsletter" />
        </div>
      </div>
      
      <div className="coupon-section">
        <div className="coupon">
          <div className="coupon-content">
            <div className="coupon-header">
              <h3>SPECIAL10</h3>
              <span className="coupon-tag">10% OFF</span>
            </div>
            <p>Use this code at checkout to get 10% off on your first purchase</p>
            <button className="copy-coupon">Copy Code</button>
          </div>
          <div className="coupon-divider">
            <div className="coupon-circle top"></div>
            <div className="coupon-circle bottom"></div>
          </div>
          <div className="coupon-validity">
            <p>Valid until: Dec 31, 2023</p>
            <p>*Terms and conditions apply</p>
          </div>
        </div>
        
        <div className="coupon">
          <div className="coupon-content">
            <div className="coupon-header">
              <h3>BUNDLE25</h3>
              <span className="coupon-tag">25% OFF</span>
            </div>
            <p>Get 25% off when you purchase any newspaper bundle</p>
            <button className="copy-coupon">Copy Code</button>
          </div>
          <div className="coupon-divider">
            <div className="coupon-circle top"></div>
            <div className="coupon-circle bottom"></div>
          </div>
          <div className="coupon-validity">
            <p>Valid until: Dec 15, 2023</p>
            <p>*Terms and conditions apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;