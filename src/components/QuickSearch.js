import React, { useState } from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Here you would typically handle the search functionality
    console.log('Searching for:', searchTerm);
    // For demo purposes, we'll just clear the search term
    setSearchTerm('');
    setIsExpanded(false);
  };
  
  return (
    <div className={`quick-search ${isExpanded ? 'expanded' : ''}`}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for newspapers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      
      {isExpanded && (
        <div className="search-suggestions">
          <div className="suggestion-section">
            <h4>Popular Searches</h4>
            <ul>
              <li>Vintage Newspapers</li>
              <li>1970s Collection</li>
              <li>Historical Events</li>
              <li>Rare Editions</li>
            </ul>
          </div>
          
          <div className="suggestion-section">
            <h4>Categories</h4>
            <ul>
              <li>Vintage Collections</li>
              <li>Rare Editions</li>
              <li>Newspaper Bundles</li>
              <li>Special Editions</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickSearch;