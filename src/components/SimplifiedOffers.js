import React, { useState } from 'react';

const SimplifiedOffers = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  
  // Define offer categories
  const offerCategories = [
    {
      id: 1,
      title: "10% OFF DEALS",
      description: "Special discounts for new customers and small orders",
      bgColor: "bg-primary",
      textColor: "text-white",
      icon: "bi-percent",
      offers: [
        {
          id: "10-1",
          title: "NEW CUSTOMER",
          description: "10% off your first order when you sign up",
          code: "WELCOME10",
          validUntil: "No expiration",
          minPurchase: "₹200"
        },
        {
          id: "10-2",
          title: "WEEKEND SPECIAL",
          description: "10% off all orders placed on weekends",
          code: "WEEKEND10",
          validUntil: "Every Sat-Sun",
          minPurchase: "₹300"
        }
      ]
    },
    {
      id: 2,
      title: "20% OFF DEALS",
      description: "Medium discounts for regular customers and bundle purchases",
      bgColor: "bg-success",
      textColor: "text-white",
      icon: "bi-tag-fill",
      offers: [
        {
          id: "20-1",
          title: "BUNDLE SAVER",
          description: "20% off when you buy 3 or more newspapers",
          code: "BUNDLE20",
          validUntil: "Ongoing",
          minPurchase: "3+ items"
        },
        {
          id: "20-2",
          title: "DECADE COLLECTION",
          description: "20% off when you buy newspapers from the same decade",
          code: "DECADE20",
          validUntil: "Limited time",
          minPurchase: "2+ items from same decade"
        }
      ]
    }
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="offers-categories-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Exclusive Coupon Offers</h2>
          <p className="lead text-muted">Use these coupon codes to save on your favorite vintage newspapers</p>
        </div>

        {offerCategories.map(category => (
          <div key={category.id} className={`offer-category-section mb-5 ${category.bgColor} rounded shadow-sm`}>
            <div className="p-4 d-flex align-items-center">
              <div className="category-icon me-3">
                <i className={`${category.icon} ${category.textColor} fs-1`}></i>
              </div>
              <div>
                <h3 className={`${category.textColor} mb-1`}>{category.title}</h3>
                <p className={`${category.textColor} mb-0 opacity-75`}>{category.description}</p>
              </div>
            </div>
            
            <div className="p-3 bg-white rounded-bottom">
              <div className="row g-3">
                {category.offers.map(offer => (
                  <div key={offer.id} className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm offer-card">
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <h5 className="card-title">{offer.title}</h5>
                          <span className="badge bg-secondary">#{offer.id}</span>
                        </div>
                        <p className="card-text">{offer.description}</p>
                        
                        <div className="coupon-details mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <small className="text-muted">Valid Until:</small>
                            <small className="fw-bold">{offer.validUntil}</small>
                          </div>
                          <div className="d-flex justify-content-between">
                            <small className="text-muted">Min Purchase:</small>
                            <small className="fw-bold">{offer.minPurchase}</small>
                          </div>
                        </div>
                        
                        <div className="coupon-code p-2 bg-light rounded d-flex justify-content-between align-items-center">
                          <span className="fw-bold">{offer.code}</span>
                          <button 
                            className={`btn btn-sm ${copiedCode === offer.code ? 'btn-success' : 'btn-outline-primary'}`}
                            onClick={() => handleCopyCode(offer.code)}
                          >
                            {copiedCode === offer.code ? (
                              <>
                                <i className="bi bi-check-lg me-1"></i>
                                Copied!
                              </>
                            ) : (
                              <>
                                <i className="bi bi-clipboard me-1"></i>
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent border-0 pt-0 pb-3">
                        <button className="btn btn-sm btn-primary w-100">Apply Coupon</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mt-5 p-4 bg-light rounded shadow-sm">
          <h4>Can't decide which offer to use?</h4>
          <p className="lead mb-4">Contact our customer support for personalized recommendations</p>
          <button className="btn btn-primary btn-lg">
            <i className="bi bi-headset me-2"></i>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedOffers;