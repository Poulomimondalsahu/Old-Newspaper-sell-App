import React from 'react';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: 'FLASH SALE',
      description: 'Get 30% off on all vintage newspapers from the 1970s',
      code: 'VINTAGE30',
      expiry: '3 days left',
      bgColor: 'bg-danger',
      image: 'https://images.unsplash.com/photo-1611159063981-b8c8c4301869?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'BUNDLE DEAL',
      description: 'Buy 3 newspapers from the same decade, get 1 free',
      code: 'BUNDLE4',
      expiry: '1 week left',
      bgColor: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'NEW CUSTOMER',
      description: 'First-time buyers get 15% off their first purchase',
      code: 'WELCOME15',
      expiry: 'Ongoing',
      bgColor: 'bg-success',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'HOLIDAY SPECIAL',
      description: 'Special holiday collection with 25% discount',
      code: 'HOLIDAY25',
      expiry: 'Limited time',
      bgColor: 'bg-warning',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="offers-section my-5">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h2 className="display-6">Special Offers</h2>
          <p className="text-muted">Limited time deals on our newspaper collections</p>
        </div>
        
        <div className="row">
          {offers.map(offer => (
            <div key={offer.id} className="col-md-4 mb-4">
              <div className={`offer-card card h-100 border-0 shadow ${offer.bgColor} text-white`}>
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
                </div>
                <div className="card-body">
                  <h3 className="card-title">{offer.title}</h3>
                  <p className="card-text">{offer.description}</p>
                  <div className="promo-code p-2 bg-light text-dark rounded mb-3 d-flex justify-content-between align-items-center">
                    <span className="fw-bold">{offer.code}</span>
                    <button className="btn btn-sm btn-outline-dark copy-btn" onClick={() => {
                      navigator.clipboard.writeText(offer.code);
                      alert(`Copied code: ${offer.code}`);
                    }}>
                      Copy
                    </button>
                  </div>
                  <button className="btn btn-light w-100">Claim Offer</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">View All Offers</button>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;