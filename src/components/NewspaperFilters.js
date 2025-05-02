import React, { useState } from 'react';

const NewspaperFilters = ({ activeFilter, setActiveFilter, priceRange, setPriceRange, searchQuery, setSearchQuery }) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState({
    category: true,
    decade: true,
    price: true,
    condition: true,
    publisher: true,
    availability: true
  });
  
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [availability, setAvailability] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  
  const categories = ['All', 'Vintage', 'Historical', 'Bundle', 'Business', 'Sports', 'Politics'];
  const decades = ['All Decades', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s'];
  const conditions = ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'];
  const publishers = ['The Times', 'New York Herald', 'The Guardian', 'Washington Post', 'Financial Times', 'Chicago Tribune', 'Sports Illustrated', 'The New York Times'];
  
  const toggleFilterSection = (section) => {
    setIsFilterExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryClick = (category) => {
    setActiveFilter(prev => ({
      ...prev,
      category: category
    }));
  };

  const handleDecadeClick = (decade) => {
    setActiveFilter(prev => ({
      ...prev,
      decade: decade
    }));
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleConditionChange = (condition) => {
    setSelectedConditions(prev => {
      if (prev.includes(condition)) {
        return prev.filter(c => c !== condition);
      } else {
        return [...prev, condition];
      }
    });
  };
  
  const handlePublisherChange = (publisher) => {
    setSelectedPublishers(prev => {
      if (prev.includes(publisher)) {
        return prev.filter(p => p !== publisher);
      } else {
        return [...prev, publisher];
      }
    });
  };

  const handleReset = () => {
    setActiveFilter({ category: 'All', decade: 'All Decades' });
    setPriceRange(1000);
    setSearchQuery('');
    setSelectedConditions([]);
    setSelectedPublishers([]);
    setAvailability('all');
    setSortBy('featured');
  };

  return (
    <div className="newspaper-filters border rounded shadow-sm mb-4">
      {/* Flipkart-style filter header */}
      <div className="filter-header bg-primary text-white p-3 d-flex justify-content-between align-items-center">
        <h5 className="m-0"><i className="bi bi-funnel-fill me-2"></i>FILTERS</h5>
        <button className="btn btn-sm btn-outline-light" onClick={handleReset}>
          CLEAR ALL
        </button>
      </div>
      
      {/* Mobile filter toggle */}
      <div className="d-block d-lg-none p-2 border-bottom">
        <button className="btn btn-outline-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filterCollapse">
          <i className="bi bi-sliders me-2"></i>Show Filters
        </button>
      </div>
      
      <div className="filter-body p-0 collapse d-lg-block" id="filterCollapse">
        {/* Search Bar */}
        <div className="p-3 border-bottom">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search newspapers..." 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
        
        {/* Sort By (Flipkart style) */}
        <div className="p-3 border-bottom">
          <div className="d-flex justify-content-between align-items-center mb-2" onClick={() => toggleFilterSection('sort')}>
            <h6 className="m-0 fw-bold">SORT BY</h6>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="sortOption" 
                id="sortFeatured" 
                checked={sortBy === 'featured'} 
                onChange={() => setSortBy('featured')}
              />
              <label className="form-check-label" htmlFor="sortFeatured">
                Featured
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="sortOption" 
                id="sortPriceLow" 
                checked={sortBy === 'price-low'} 
                onChange={() => setSortBy('price-low')}
              />
              <label className="form-check-label" htmlFor="sortPriceLow">
                Price: Low to High
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="sortOption" 
                id="sortPriceHigh" 
                checked={sortBy === 'price-high'} 
                onChange={() => setSortBy('price-high')}
              />
              <label className="form-check-label" htmlFor="sortPriceHigh">
                Price: High to Low
              </label>
            </div>
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="radio" 
                name="sortOption" 
                id="sortDiscount" 
                checked={sortBy === 'discount'} 
                onChange={() => setSortBy('discount')}
              />
              <label className="form-check-label" htmlFor="sortDiscount">
                Discount
              </label>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="p-3 border-bottom">
          <div 
            className="d-flex justify-content-between align-items-center mb-2 cursor-pointer" 
            onClick={() => toggleFilterSection('category')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="m-0 fw-bold">CATEGORY</h6>
            <i className={`bi ${isFilterExpanded.category ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
          
          {isFilterExpanded.category && (
            <div className="d-flex flex-column gap-2">
              {categories.map(category => (
                <div key={category} className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="categoryOption" 
                    id={`category-${category}`} 
                    checked={activeFilter.category === category} 
                    onChange={() => handleCategoryClick(category)}
                  />
                  <label className="form-check-label" htmlFor={`category-${category}`}>
                    {category}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Decade Filters */}
        <div className="p-3 border-bottom">
          <div 
            className="d-flex justify-content-between align-items-center mb-2"
            onClick={() => toggleFilterSection('decade')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="m-0 fw-bold">ERA</h6>
            <i className={`bi ${isFilterExpanded.decade ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
          
          {isFilterExpanded.decade && (
            <div className="d-flex flex-column gap-2">
              {decades.map(decade => (
                <div key={decade} className="form-check">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="decadeOption" 
                    id={`decade-${decade}`} 
                    checked={activeFilter.decade === decade} 
                    onChange={() => handleDecadeClick(decade)}
                  />
                  <label className="form-check-label" htmlFor={`decade-${decade}`}>
                    {decade}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range - Flipkart style */}
        <div className="p-3 border-bottom">
          <div 
            className="d-flex justify-content-between align-items-center mb-2"
            onClick={() => toggleFilterSection('price')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="m-0 fw-bold">PRICE</h6>
            <i className={`bi ${isFilterExpanded.price ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
          
          {isFilterExpanded.price && (
            <>
              <div className="price-range-slider mb-3">
                <input 
                  type="range" 
                  className="form-range" 
                  min="0" 
                  max="1000" 
                  step="50" 
                  value={priceRange}
                  onChange={handlePriceChange}
                />
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="price-input">
                  <span className="text-muted me-2">₹</span>
                  <span>0</span>
                </div>
                <span className="text-muted">to</span>
                <div className="price-input">
                  <span className="text-muted me-2">₹</span>
                  <span>{priceRange}</span>
                </div>
              </div>
              
              <div className="mt-3">
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary flex-grow-1" onClick={() => setPriceRange(300)}>
                    Under ₹300
                  </button>
                  <button className="btn btn-sm btn-outline-primary flex-grow-1" onClick={() => setPriceRange(500)}>
                    Under ₹500
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Condition Filter */}
        <div className="p-3 border-bottom">
          <div 
            className="d-flex justify-content-between align-items-center mb-2"
            onClick={() => toggleFilterSection('condition')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="m-0 fw-bold">CONDITION</h6>
            <i className={`bi ${isFilterExpanded.condition ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
          
          {isFilterExpanded.condition && (
            <div className="d-flex flex-column gap-2">
              {conditions.map(condition => (
                <div key={condition} className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={`condition-${condition}`} 
                    checked={selectedConditions.includes(condition)} 
                    onChange={() => handleConditionChange(condition)}
                  />
                  <label className="form-check-label" htmlFor={`condition-${condition}`}>
                    {condition}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Publisher Filter */}
        <div className="p-3 border-bottom">
          <div 
            className="d-flex justify-content-between align-items-center mb-2"
            onClick={() => toggleFilterSection('publisher')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="m-0 fw-bold">PUBLISHER</h6>
            <i className={`bi ${isFilterExpanded.publisher ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
          
          {isFilterExpanded.publisher && (
            <div className="d-flex flex-column gap-2">
              {publishers.map(publisher => (
                <div key={publisher} className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={`publisher-${publisher}`} 
                    checked={selectedPublishers.includes(publisher)} 
                    onChange={() => handlePublisherChange(publisher)}
                  />
                  <label className="form-check-label" htmlFor={`publisher-${publisher}`}>
                    {publisher}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Availability Filter */}
        <div className="p-3 border-bottom">
          <div 
            className="d-flex justify-content-between align-items-center mb-2"
            onClick={() => toggleFilterSection('availability')}
            style={{ cursor: 'pointer' }}
          >
            <h6 className="m-0 fw-bold">AVAILABILITY</h6>
            <i className={`bi ${isFilterExpanded.availability ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </div>
          
          {isFilterExpanded.availability && (
            <div className="d-flex flex-column gap-2">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="availabilityOption" 
                  id="availability-all" 
                  checked={availability === 'all'} 
                  onChange={() => setAvailability('all')}
                />
                <label className="form-check-label" htmlFor="availability-all">
                  All
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="availabilityOption" 
                  id="availability-instock" 
                  checked={availability === 'instock'} 
                  onChange={() => setAvailability('instock')}
                />
                <label className="form-check-label" htmlFor="availability-instock">
                  In Stock
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="availabilityOption" 
                  id="availability-outofstock" 
                  checked={availability === 'outofstock'} 
                  onChange={() => setAvailability('outofstock')}
                />
                <label className="form-check-label" htmlFor="availability-outofstock">
                  Out of Stock
                </label>
              </div>
            </div>
          )}
        </div>
        
        {/* Apply Filters Button (Mobile) */}
        <div className="p-3 d-block d-lg-none">
          <button className="btn btn-primary w-100" type="button" data-bs-toggle="collapse" data-bs-target="#filterCollapse">
            Apply Filters
          </button>
        </div>
      </div>
      
      {/* Active Filters Display */}
      <div className="active-filters p-3 border-top">
        <h6 className="mb-2 text-muted">Applied Filters:</h6>
        <div className="d-flex flex-wrap gap-2">
          {activeFilter.category !== 'All' && (
            <span className="badge bg-primary">
              Category: {activeFilter.category}
              <button className="btn-close btn-close-white ms-2" style={{ fontSize: '0.5rem' }} onClick={() => handleCategoryClick('All')}></button>
            </span>
          )}
          
          {activeFilter.decade !== 'All Decades' && (
            <span className="badge bg-info">
              Era: {activeFilter.decade}
              <button className="btn-close btn-close-white ms-2" style={{ fontSize: '0.5rem' }} onClick={() => handleDecadeClick('All Decades')}></button>
            </span>
          )}
          
          {priceRange < 1000 && (
            <span className="badge bg-success">
              Price: Up to ₹{priceRange}
              <button className="btn-close btn-close-white ms-2" style={{ fontSize: '0.5rem' }} onClick={() => setPriceRange(1000)}></button>
            </span>
          )}
          
          {selectedConditions.map(condition => (
            <span key={condition} className="badge bg-secondary">
              Condition: {condition}
              <button className="btn-close btn-close-white ms-2" style={{ fontSize: '0.5rem' }} onClick={() => handleConditionChange(condition)}></button>
            </span>
          ))}
          
          {selectedPublishers.map(publisher => (
            <span key={publisher} className="badge bg-warning text-dark">
              Publisher: {publisher}
              <button className="btn-close ms-2" style={{ fontSize: '0.5rem' }} onClick={() => handlePublisherChange(publisher)}></button>
            </span>
          ))}
          
          {availability !== 'all' && (
            <span className="badge bg-danger">
              {availability === 'instock' ? 'In Stock Only' : 'Out of Stock'}
              <button className="btn-close btn-close-white ms-2" style={{ fontSize: '0.5rem' }} onClick={() => setAvailability('all')}></button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewspaperFilters;