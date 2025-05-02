import React from 'react';
import { newspapers } from './NewspaperData';

const NewspaperSection = ({ addToCart }) => {
  const handleAddToCart = (newspaper) => {
    addToCart(newspaper);
  };

  const handleBuyNow = (newspaper) => {
    addToCart(newspaper);
    // Redirect to cart page
    window.location.href = '/cart';
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Vintage Newspaper Collection</h2>
      <p className="text-center mb-5">Discover our exclusive collection of historical newspapers from different eras</p>
      
      <div className="row">
        {newspapers.map((newspaper) => (
          <div key={newspaper.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-img-container" style={{ height: '250px', overflow: 'hidden' }}>
                <img 
                  src={newspaper.imageUrl} 
                  className="card-img-top" 
                  alt={newspaper.itemName}
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%'
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{newspaper.itemName}</h5>
                <p className="card-text text-muted mb-1">{newspaper.category}</p>
                <p className="card-text small mb-3">{newspaper.description}</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="h5 mb-0">₹{newspaper.itemPrice}</span>
                    <span className="badge bg-success">In Stock</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button 
                      className="btn btn-primary flex-grow-1 me-2" 
                      onClick={() => handleAddToCart(newspaper)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="btn btn-outline-success flex-grow-1" 
                      onClick={() => handleBuyNow(newspaper)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewspaperSection;