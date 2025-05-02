import React, { useState } from 'react';

const FeaturesSection = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  
  // Define 6 separate offer categories
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
        },
        {
          id: "10-3",
          title: "NEWSLETTER SIGNUP",
          description: "10% off when you subscribe to our newsletter",
          code: "NEWS10",
          validUntil: "One-time use",
          minPurchase: "Any purchase"
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
        },
        {
          id: "20-3",
          title: "RETURN CUSTOMER",
          description: "20% off your second order",
          code: "RETURN20",
          validUntil: "30 days after first purchase",
          minPurchase: "₹500"
        }
      ]
    },
    {
      id: 3,
      title: "30% OFF DEALS",
      description: "Major discounts on premium collections and bulk orders",
      bgColor: "bg-danger",
      textColor: "text-white",
      icon: "bi-lightning-fill",
      offers: [
        {
          id: "30-1",
          title: "FLASH SALE",
          description: "30% off selected vintage newspapers",
          code: "FLASH30",
          validUntil: "Next 48 hours",
          minPurchase: "Any purchase"
        },
        {
          id: "30-2",
          title: "BULK ORDER",
          description: "30% off when you buy 5 or more newspapers",
          code: "BULK30",
          validUntil: "Ongoing",
          minPurchase: "5+ items"
        },
        {
          id: "30-3",
          title: "PREMIUM COLLECTION",
          description: "30% off our premium historical newspapers",
          code: "PREMIUM30",
          validUntil: "Limited time",
          minPurchase: "Premium items only"
        }
      ]
    },
    {
      id: 4,
      title: "SPECIAL OCCASIONS",
      description: "Celebrate special days with exclusive discounts",
      bgColor: "bg-warning",
      textColor: "text-dark",
      icon: "bi-gift",
      offers: [
        {
          id: "spec-1",
          title: "BIRTHDAY SPECIAL",
          description: "25% off newspapers from your birth year",
          code: "BIRTHDAY25",
          validUntil: "Valid during your birthday month",
          minPurchase: "Any purchase"
        },
        {
          id: "spec-2",
          title: "ANNIVERSARY GIFT",
          description: "15% off newspapers from your anniversary year",
          code: "ANNIV15",
          validUntil: "Valid during your anniversary month",
          minPurchase: "Any purchase"
        },
        {
          id: "spec-3",
          title: "HOLIDAY SEASON",
          description: "20% off all newspapers during holiday season",
          code: "HOLIDAY20",
          validUntil: "Dec 1 - Jan 15",
          minPurchase: "₹400"
        }
      ]
    },
    {
      id: 5,
      title: "CATEGORY DISCOUNTS",
      description: "Special offers for specific newspaper categories",
      bgColor: "bg-info",
      textColor: "text-dark",
      icon: "bi-newspaper",
      offers: [
        {
          id: "cat-1",
          title: "SPORTS COLLECTION",
          description: "15% off all sports newspapers",
          code: "SPORTS15",
          validUntil: "Ongoing",
          minPurchase: "Sports category only"
        },
        {
          id: "cat-2",
          title: "POLITICAL EVENTS",
          description: "20% off newspapers covering major political events",
          code: "POLITICS20",
          validUntil: "Limited time",
          minPurchase: "Politics category only"
        },
        {
          id: "cat-3",
          title: "HISTORICAL MOMENTS",
          description: "25% off newspapers from significant historical moments",
          code: "HISTORY25",
          validUntil: "Ongoing",
          minPurchase: "Historical category only"
        }
      ]
    },
    {
      id: 6,
      title: "REFERRAL & LOYALTY",
      description: "Rewards for loyal customers and referrals",
      bgColor: "bg-dark",
      textColor: "text-white",
      icon: "bi-award",
      offers: [
        {
          id: "loyal-1",
          title: "REFER A FRIEND",
          description: "15% off for you and your friend",
          code: "REFER15",
          validUntil: "Unlimited usage",
          minPurchase: "Any purchase"
        },
        {
          id: "loyal-2",
          title: "LOYALTY REWARD",
          description: "25% off after your 5th purchase",
          code: "LOYAL25",
          validUntil: "After 5th purchase",
          minPurchase: "Any purchase"
        },
        {
          id: "loyal-3",
          title: "SOCIAL MEDIA SHARE",
          description: "10% off when you share your purchase on social media",
          code: "SOCIAL10",
          validUntil: "One-time use per order",
          minPurchase: "Any purchase"
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
                  <div key={offer.id} className="col-md-4">
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
      
      {/* Custom CSS for this component */}
      <style jsx="true">{`
        .offer-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .offer-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        
        .coupon-code {
          border: 1px dashed #ccc;
          background: repeating-linear-gradient(
            45deg,
            #f8f9fa,
            #f8f9fa 10px,
            #f1f3f5 10px,
            #f1f3f5 20px
          ) !important;
        }
        
        .category-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }
      `}</style>
    </div>
  );
};

export default FeaturesSection;