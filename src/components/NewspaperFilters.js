import React, { useState } from 'react';
import './NewspaperFilters.css';

const NewspaperFilters = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedEras, setSelectedEras] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'vintage', name: 'Vintage Collections' },
    { id: 'rare', name: 'Rare Editions' },
    { id: 'bundle', name: 'Newspaper Bundles' },
    { id: 'special', name: 'Special Editions' }
  ];

  const eras = [
    { id: '1950s', name: '1950s' },
    { id: '1960s', name: '1960s' },
    { id: '1970s', name: '1970s' },
    { id: '1980s', name: '1980s' },
    { id: '1990s', name: '1990s' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest First' },
    { id: 'oldest', name: 'Oldest First' }
  ];

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
    
    if (onFilterChange) {
      onFilterChange({
        priceRange: newPriceRange,
        categories: selectedCategories,
        eras: selectedEras,
        sortBy
      });
    }
  };

  const handleCategoryChange = (categoryId) => {
    const newSelectedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(newSelectedCategories);
    
    if (onFilterChange) {
      onFilterChange({
        priceRange,
        categories: newSelectedCategories,
        eras: selectedEras,
        sortBy
      });
    }
  };

  const handleEraChange = (eraId) => {
    const newSelectedEras = selectedEras.includes(eraId)
      ? selectedEras.filter(id => id !== eraId)
      : [...selectedEras, eraId];
    
    setSelectedEras(newSelectedEras);
    
    if (onFilterChange) {
      onFilterChange({
        priceRange,
        categories: selectedCategories,
        eras: newSelectedEras,
        sortBy
      });
    }
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    
    if (onFilterChange) {
      onFilterChange({
        priceRange,
        categories: selectedCategories,
        eras: selectedEras,
        sortBy: newSortBy
      });
    }
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedEras([]);
    setSortBy('featured');
    
    if (onFilterChange) {
      onFilterChange({
        priceRange: [0, 1000],
        categories: [],
        eras: [],
        sortBy: 'featured'
      });
    }
  };

  return (
    <div className="newspaper-filters">
      <div className="filters-header">
        <h3>Filter Newspapers</h3>
        <button className="clear-filters" onClick={clearFilters}>Clear All</button>
      </div>
      
      <div className="filter-section">
        <h4>Sort By</h4>
        <select 
          className="sort-select" 
          value={sortBy} 
          onChange={handleSortChange}
        >
          {sortOptions.map(option => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-inputs">
          <div className="price-input">
            <span>₹</span>
            <input 
              type="number" 
              min="0" 
              max={priceRange[1]} 
              value={priceRange[0]} 
              onChange={(e) => handlePriceChange(e, 0)}
            />
          </div>
          <span className="price-separator">to</span>
          <div className="price-input">
            <span>₹</span>
            <input 
              type="number" 
              min={priceRange[0]} 
              max="10000" 
              value={priceRange[1]} 
              onChange={(e) => handlePriceChange(e, 1)}
            />
          </div>
        </div>
        <div className="price-slider">
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange[0]} 
            onChange={(e) => handlePriceChange(e, 0)}
            className="slider"
          />
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={priceRange[1]} 
            onChange={(e) => handlePriceChange(e, 1)}
            className="slider"
          />
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Categories</h4>
        <div className="filter-options">
          {categories.map(category => (
            <label key={category.id} className="filter-option">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(category.id)} 
                onChange={() => handleCategoryChange(category.id)}
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Era</h4>
        <div className="filter-options">
          {eras.map(era => (
            <label key={era.id} className="filter-option">
              <input 
                type="checkbox" 
                checked={selectedEras.includes(era.id)} 
                onChange={() => handleEraChange(era.id)}
              />
              <span>{era.name}</span>
            </label>
          ))}
        </div>
      </div>
      
      <button className="apply-filters">Apply Filters</button>
    </div>
  );
};

export default NewspaperFilters;