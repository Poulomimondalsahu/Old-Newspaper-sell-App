import React from 'react';
import './NewspaperCategories.css';

// Import images directly
import categoryImage1 from '../assets/im07.jpeg';
import categoryImage2 from '../assets/im08.jpeg';
import categoryImage3 from '../assets/im09.jpeg';
import categoryImage4 from '../assets/im10.jpeg';

const NewspaperCategories = () => {
  const categories = [
    {
      id: 'vintage',
      name: 'Vintage Collections',
      description: 'Newspapers from the golden era of print journalism',
      image: categoryImage1
    },
    {
      id: 'rare',
      name: 'Rare Editions',
      description: 'Hard-to-find newspaper editions with historical significance',
      image: categoryImage2
    },
    {
      id: 'bundles',
      name: 'Newspaper Bundles',
      description: 'Complete collections from specific time periods',
      image: categoryImage3
    },
    {
      id: 'special',
      name: 'Special Editions',
      description: 'Commemorative issues covering major historical events',
      image: categoryImage4
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