import React, { useState } from 'react';

const OffersSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAllOffers, setShowAllOffers] = useState(false);
  
  const offers = [
    {
      id: 1,
      title: 'FLASH SALE',
      description: 'Get 30% off on all vintage newspapers from the 1970s',
      code: 'VINTAGE30',
      expiry: '3 days left',
      bgColor: 'bg-danger',
      image: 'https://images.unsplash.com/photo-1611159063981-b8c8c4301869?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'sale',
      badge: 'HOT',
      badgeColor: 'bg-danger'
    },
    {
      id: 2,
      title: 'BUNDLE DEAL',
      description: 'Buy 3 newspapers from the same decade, get 1 free',
      code: 'BUNDLE4',
      expiry: '1 week left',
      bgColor: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'bundle',
      badge: 'POPULAR',
      badgeColor: 'bg-primary'
    },
    {
      id: 3,
      title: 'NEW CUSTOMER',
      description: 'First-time buyers get 15% off their first purchase',
      code: 'WELCOME15',
      expiry: 'Ongoing',
      bgColor: 'bg-success',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'new',
      badge: 'NEW',
      badgeColor: 'bg-success'
    },
    {
      id: 4,
      title: 'HOLIDAY SPECIAL',
      description: 'Special holiday collection with 25% discount',
      code: 'HOLIDAY25',
      expiry: 'Limited time',
      bgColor: 'bg-warning',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'sale',
      badge: 'LIMITED',
      badgeColor: 'bg-warning'
    },
    {
      id: 5,
      title: 'HISTORY BUFF',
      description: 'Historical newspapers from World War II era - 20% off',
      code: 'HISTORY20',
      expiry: '5 days left',
      bgColor: 'bg-info',
      image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'collection',
      badge: 'TRENDING',
      badgeColor: 'bg-info'
    },
    {
      id: 6,
      title: 'WEEKEND FLASH',
      description: 'Weekend special: 40% off on select newspapers',
      code: 'WEEKEND40',
      expiry: 'This weekend only',
      bgColor: 'bg-danger',
      image: 'https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'sale',
      badge: 'WEEKEND',
      badgeColor: 'bg-danger'
    },
    {
      id: 7,
      title: 'PREMIUM BUNDLE',
      description: 'Premium newspaper collection with free shipping',
      code: 'PREMIUM',
      expiry: '2 weeks left',
      bgColor: 'bg-dark',
      image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'bundle',
      badge: 'PREMIUM',
      badgeColor: 'bg-dark'
    },
    {
      id: 8,
      title: 'REFER A FRIEND',
      description: 'Get ₹200 off when you refer a friend',
      code: 'REFER200',
      expiry: 'Ongoing',
      bgColor: 'bg-success',
      image: 'https://images.unsplash.com/photo-1569252938915-5aa0fb5584ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'new',
      badge: 'BONUS',
      badgeColor: 'bg-success'
    }
  ];

  // Filter offers based on active tab
  const filteredOffers = activeTab === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === activeTab);
  
  // Display limited offers or all offers based on showAllOffers state
  const displayedOffers = showAllOffers ? filteredOffers : filteredOffers.slice(0, 4);

  return (
    <div className="offers-section my-5">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="display-6">Special Offers & Deals</h2>
          <p className="text-muted">Exclusive deals and limited-time offers on our newspaper collections</p>
        </div>
        
        {/* Flipkart-style category tabs */}
        <div className="offer-tabs mb-4">
          <div className="d-flex justify-content-center flex-wrap">
            <button 
              className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-primary'} m-1`}
              onClick={() => setActiveTab('all')}
            >
              All Offers
            </button>
            <button 
              className={`btn ${activeTab === 'sale' ? 'btn-danger' : 'btn-outline-danger'} m-1`}
              onClick={() => setActiveTab('sale')}
            >
              Flash Sales
            </button>
            <button 
              className={`btn ${activeTab === 'bundle' ? 'btn-success' : 'btn-outline-success'} m-1`}
              onClick={() => setActiveTab('bundle')}
            >
              Bundle Deals
            </button>
            <button 
              className={`btn ${activeTab === 'new' ? 'btn-info' : 'btn-outline-info'} m-1`}
              onClick={() => setActiveTab('new')}
            >
              New Customer
            </button>
            <button 
              className={`btn ${activeTab === 'collection' ? 'btn-warning' : 'btn-outline-warning'} m-1`}
              onClick={() => setActiveTab('collection')}
            >
              Collections
            </button>
          </div>
        </div>
        
        {/* Countdown timer for flash sales */}
        {activeTab === 'sale' && (
          <div className="flash-sale-timer text-center mb-4">
            <div className="bg-danger text-white p-3 rounded">
              <h4 className="mb-2">Flash Sale Ends In:</h4>
              <div className="d-flex justify-content-center">
                <div className="px-3">
                  <h3>23</h3>
                  <small>Hours</small>
                </div>
                <div className="px-3">
                  <h3>45</h3>
                  <small>Minutes</small>
                </div>
                <div className="px-3">
                  <h3>19</h3>
                  <small>Seconds</small>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Offers grid with animation */}
        <div className="row">
          {displayedOffers.map((offer, index) => (
            <div key={offer.id} className="col-md-6 col-lg-3 mb-4">
              <div className={`offer-card card h-100 border-0 shadow-lg ${offer.bgColor} text-white`} 
                style={{
                  transform: 'translateY(0)',
                  transition: 'transform 0.3s ease',
                  animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="position-relative">
                  <div className="offer-overlay" style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: 'rgba(0,0,0,0.3)' 
                  }}></div>
                  <img 
                    src={offer.image} 
                    className="card-img-top" 
                    alt={offer.title}
                    style={{ height: '150px', objectFit: 'cover', opacity: '0.7' }}
                  />
                  <div className="position-absolute top-0 start-0 p-3">
                    <span className="badge bg-warning text-dark">{offer.expiry}</span>
                  </div>
                  <div className="position-absolute top-0 end-0 p-3">
                    <span className={`badge ${offer.badgeColor}`}>{offer.badge}</span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{offer.title}</h4>
                  <p className="card-text">{offer.description}</p>
                  <div className="promo-code p-2 bg-light text-dark rounded mb-3 d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{offer.code}</span>
                    <button className="btn btn-sm btn-outline-dark copy-btn" onClick={() => {
                      navigator.clipboard.writeText(offer.code);
                      alert(`Copied code: ${offer.code}`);
                    }}>
                      <i className="bi bi-clipboard me-1"></i> Copy
                    </button>
                  </div>
                  <button className="btn btn-light w-100 fw-bold">
                    <i className="bi bi-tag-fill me-2"></i>Claim Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show more/less button */}
        {filteredOffers.length > 4 && (
          <div className="text-center mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={() => setShowAllOffers(!showAllOffers)}
            >
              {showAllOffers ? (
                <>
                  <i className="bi bi-chevron-up me-2"></i>
                  Show Less
                </>
              ) : (
                <>
                  <i className="bi bi-chevron-down me-2"></i>
                  View All {filteredOffers.length} Offers
                </>
              )}
            </button>
          </div>
        )}
        
        {/* Newsletter subscription for exclusive offers */}
        <div className="exclusive-offers-signup mt-5 p-4 bg-light rounded shadow-sm">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h4><i className="bi bi-envelope-paper me-2"></i>Get Exclusive Offers</h4>
              <p className="mb-0">Subscribe to our newsletter and receive exclusive offers directly to your inbox!</p>
            </div>
            <div className="col-md-5">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .offer-card {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default OffersSection;