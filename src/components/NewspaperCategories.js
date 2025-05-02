import React from 'react';
import './NewspaperCategories.css';

const NewspaperCategories = () => {
  const categories = [
    {
      id: 'vintage',
      name: 'Vintage Collections',
      description: 'Newspapers from the golden era of print journalism',
      image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'rare',
      name: 'Rare Editions',
      description: 'Hard-to-find newspaper editions with historical significance',
      image: 'https://images.unsplash.com/photo-1541716091673-07005d2c792e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'bundles',
      name: 'Newspaper Bundles',
      description: 'Complete collections from specific time periods',
      image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'special',
      name: 'Special Editions',
      description: 'Commemorative issues covering major historical events',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="categories-container">
      <h2 className="categories-title">Browse by Category</h2>
      <p className="categories-description">
        Explore our extensive collection of newspapers organized by category
      </p>
      
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <button className="category-button">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewspaperCategories;