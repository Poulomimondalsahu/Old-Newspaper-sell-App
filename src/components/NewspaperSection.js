import React, { useState, useEffect } from 'react';
import { newspapers } from './NewspaperData';
import NewspaperFilters from './NewspaperFilters';

const NewspaperSection = ({ addToCart }) => {
  const [filteredNewspapers, setFilteredNewspapers] = useState(newspapers);
  const [activeFilter, setActiveFilter] = useState({ category: 'All', decade: 'All Decades' });
  const [priceRange, setPriceRange] = useState(1000);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');

  useEffect(() => {
    // Apply filters
    let result = newspapers;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(newspaper => 
        newspaper.itemName.toLowerCase().includes(query) || 
        newspaper.description.toLowerCase().includes(query) ||
        newspaper.publisher.toLowerCase().includes(query) ||
        newspaper.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (activeFilter.category !== 'All') {
      result = result.filter(newspaper => newspaper.category === activeFilter.category);
    }

    // Filter by decade
    if (activeFilter.decade !== 'All Decades') {
      result = result.filter(newspaper => newspaper.decade === activeFilter.decade);
    }

    // Filter by price
    result = result.filter(newspaper => {
      // Calculate actual price after discount
      const actualPrice = newspaper.discount 
        ? newspaper.itemPrice - (newspaper.itemPrice * newspaper.discount / 100) 
        : newspaper.itemPrice;
      return actualPrice <= priceRange;
    });

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result = [...result].sort((a, b) => {
          const priceA = a.discount ? a.itemPrice - (a.itemPrice * a.discount / 100) : a.itemPrice;
          const priceB = b.discount ? b.itemPrice - (b.itemPrice * b.discount / 100) : b.itemPrice;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result = [...result].sort((a, b) => {
          const priceA = a.discount ? a.itemPrice - (a.itemPrice * a.discount / 100) : a.itemPrice;
          const priceB = b.discount ? b.itemPrice - (b.itemPrice * b.discount / 100) : b.itemPrice;
          return priceB - priceA;
        });
        break;
      case 'discount':
        result = [...result].sort((a, b) => b.discount - a.discount);
        break;
      case 'featured':
      default:
        result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredNewspapers(result);
  }, [activeFilter, priceRange, searchQuery, sortOption]);

  const handleAddToCart = (newspaper) => {
    addToCart(newspaper);
  };

  const handleBuyNow = (newspaper) => {
    addToCart(newspaper);
    // Redirect to cart page
    window.location.href = '/cart';
  };

  const calculateDiscountedPrice = (price, discount) => {
    if (!discount) return price;
    return price - (price * discount / 100);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Vintage Newspaper Collection</h2>
      <p className="text-center mb-5">Discover our exclusive collection of historical newspapers from different eras</p>
      
      <div className="row">
        {/* Filters Column */}
        <div className="col-lg-3 mb-4">
          <NewspaperFilters 
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          
          {/* Sort Options */}
          <div className="bg-light p-4 rounded">
            <h4 className="mb-3">Sort By</h4>
            <select 
              className="form-select" 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>
        
        {/* Newspapers Column */}
        <div className="col-lg-9">
          {filteredNewspapers.length === 0 ? (
            <div className="alert alert-info text-center p-5">
              <h4>No newspapers match your filters</h4>
              <p>Try adjusting your filter criteria or search query</p>
            </div>
          ) : (
            <div className="row">
              {filteredNewspapers.map((newspaper) => (
                <div key={newspaper.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm position-relative">
                    {newspaper.discount > 0 && (
                      <div className="position-absolute top-0 end-0 p-2">
                        <span className="badge bg-danger">{newspaper.discount}% OFF</span>
                      </div>
                    )}
                    {newspaper.featured && (
                      <div className="position-absolute top-0 start-0 p-2">
                        <span className="badge bg-primary">Featured</span>
                      </div>
                    )}
                    <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                      <img 
                        src={newspaper.filename ? 
                          `http://localhost:8185/images/${newspaper.filename}` : 
                          newspaper.imageUrl} 
                        className="card-img-top" 
                        alt={newspaper.itemName}
                        onError={(e) => {
                          // If the local image fails to load, fall back to the remote URL
                          if (e.target.src !== newspaper.imageUrl) {
                            e.target.src = newspaper.imageUrl;
                          }
                        }}
                        style={{
                          objectFit: 'cover',
                          height: '100%',
                          width: '100%'
                        }}
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{newspaper.itemName}</h5>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="badge bg-secondary">{newspaper.category}</span>
                        <span className="badge bg-info text-dark">{newspaper.decade}</span>
                      </div>
                      <p className="card-text small mb-3">{newspaper.description}</p>
                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          {newspaper.discount > 0 ? (
                            <div>
                              <span className="h5 mb-0 text-danger">₹{calculateDiscountedPrice(newspaper.itemPrice, newspaper.discount)}</span>
                              <span className="text-muted text-decoration-line-through ms-2">₹{newspaper.itemPrice}</span>
                            </div>
                          ) : (
                            <span className="h5 mb-0">₹{newspaper.itemPrice}</span>
                          )}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default NewspaperSection;