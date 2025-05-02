import React from 'react';

const NewspaperFilters = ({ activeFilter, setActiveFilter, priceRange, setPriceRange, searchQuery, setSearchQuery }) => {
  const categories = ['All', 'Vintage', 'Historical', 'Bundle', 'Business', 'Sports', 'Politics'];
  const decades = ['All Decades', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s'];

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

  const handleReset = () => {
    setActiveFilter({ category: 'All', decade: 'All Decades' });
    setPriceRange(1000);
    setSearchQuery('');
  };

  return (
    <div className="newspaper-filters bg-light p-4 rounded mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="m-0">Filter Newspapers</h4>
        <button className="btn btn-sm btn-outline-secondary" onClick={handleReset}>Reset Filters</button>
      </div>

      {/* Search Bar */}
      <div className="mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search newspapers..." 
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Category Filters */}
      <div className="mb-3">
        <h6>Categories</h6>
        <div className="d-flex flex-wrap gap-2">
          {categories.map(category => (
            <button 
              key={category} 
              className={`btn btn-sm ${activeFilter.category === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Decade Filters */}
      <div className="mb-3">
        <h6>Era</h6>
        <div className="d-flex flex-wrap gap-2">
          {decades.map(decade => (
            <button 
              key={decade} 
              className={`btn btn-sm ${activeFilter.decade === decade ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => handleDecadeClick(decade)}
            >
              {decade}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-3">
        <h6>Price Range: ₹0 - ₹{priceRange}</h6>
        <input 
          type="range" 
          className="form-range" 
          min="0" 
          max="1000" 
          step="50" 
          value={priceRange}
          onChange={handlePriceChange}
        />
        <div className="d-flex justify-content-between">
          <small>₹0</small>
          <small>₹1000</small>
        </div>
      </div>
    </div>
  );
};

export default NewspaperFilters;