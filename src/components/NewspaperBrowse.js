import React, { useState, useEffect } from 'react';
import { newspaperData } from './data/NewspaperData';
import NewspaperFilters from './NewspaperFilters';
import './NewspaperBrowse.css';

const NewspaperBrowse = ({ addToCart }) => {
  const [filteredNewspapers, setFilteredNewspapers] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    categories: [],
    eras: [],
    sortBy: 'featured'
  });
  
  useEffect(() => {
    // Apply filters to the newspaper data
    let filtered = [...newspaperData];
    
    // Filter by price range
    filtered = filtered.filter(paper => 
      paper.itemPrice >= filters.priceRange[0] && 
      paper.itemPrice <= filters.priceRange[1]
    );
    
    // Filter by categories if any are selected
    if (filters.categories.length > 0) {
      filtered = filtered.filter(paper => 
        filters.categories.includes(paper.category.toLowerCase())
      );
    }
    
    // Sort the results
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.itemPrice - b.itemPrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.itemPrice - a.itemPrice);
        break;
      case 'newest':
        // This would typically use a date field, but we'll use ID as a proxy
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'oldest':
        filtered.sort((a, b) => a.id.localeCompare(b.id));
        break;
      default:
        // 'featured' - no specific sorting
        break;
    }
    
    setFilteredNewspapers(filtered);
  }, [filters]);
  
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="newspaper-browse-container">
      <h2 className="browse-title">Browse Our Collection</h2>
      <p className="browse-description">
        Discover our extensive collection of rare and vintage newspapers from different eras.
        Use the filters to find exactly what you're looking for.
      </p>
      
      <div className="browse-content">
        <div className="filters-sidebar">
          <NewspaperFilters onFilterChange={handleFilterChange} />
        </div>
        
        <div className="newspapers-grid">
          {filteredNewspapers.length > 0 ? (
            filteredNewspapers.map((newspaper) => (
              <div key={newspaper.id} className="newspaper-item">
                <div className="newspaper-item-image">
                  <img src={newspaper.imageUrl} alt={newspaper.itemName} />
                </div>
                <div className="newspaper-item-info">
                  <h3>{newspaper.itemName}</h3>
                  <p>{newspaper.description}</p>
                  <div className="newspaper-item-meta">
                    <span className="newspaper-item-category">{newspaper.category}</span>
                    {newspaper.inStock ? (
                      <span className="newspaper-item-stock in-stock">In Stock</span>
                    ) : (
                      <span className="newspaper-item-stock out-of-stock">Out of Stock</span>
                    )}
                  </div>
                  <div className="newspaper-item-price">₹{newspaper.itemPrice}</div>
                  <div className="newspaper-item-actions">
                    <button 
                      className="btn-newspaper-buy"
                      onClick={() => addToCart(newspaper)}
                      disabled={!newspaper.inStock}
                    >
                      Buy Now
                    </button>
                    <button 
                      className="btn-newspaper-cart"
                      onClick={() => addToCart(newspaper)}
                      disabled={!newspaper.inStock}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <h3>No newspapers found</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
              <button 
                className="reset-filters"
                onClick={() => setFilters({
                  priceRange: [0, 1000],
                  categories: [],
                  eras: [],
                  sortBy: 'featured'
                })}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewspaperBrowse;