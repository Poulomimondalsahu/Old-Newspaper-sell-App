import React from 'react';
import './NewspaperCategories.css';

const NewspaperCategories = () => {
  const categories = [
    {
      id: 'vintage',
      name: 'Vintage Collections',
      description: 'Newspapers from the golden era of print journalism',
      image: '/image/im07.jpeg'
    },
    {
      id: 'rare',
      name: 'Rare Editions',
      description: 'Hard-to-find newspaper editions with historical significance',
      image: '/image/im08.jpeg'
    },
    {
      id: 'bundles',
      name: 'Newspaper Bundles',
      description: 'Complete collections from specific time periods',
      image: '/image/im09.jpeg'
    },
    {
      id: 'special',
      name: 'Special Editions',
      description: 'Commemorative issues covering major historical events',
      image: '/image/im10.jpeg'
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