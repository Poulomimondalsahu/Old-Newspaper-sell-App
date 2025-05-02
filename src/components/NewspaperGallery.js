import React, { useState } from 'react';
import './NewspaperGallery.css';

const NewspaperGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryItems = [
    {
      id: 'gallery1',
      title: 'The New York Times - 1969 Moon Landing',
      description: 'Historic front page covering the Apollo 11 moon landing',
      image: '/image/im03.jpg',
      year: '1969'
    },
    {
      id: 'gallery2',
      title: 'The Washington Post - Watergate Scandal',
      description: 'Coverage of the Watergate scandal that led to President Nixon\'s resignation',
      image: '/image/im04.jpeg',
      year: '1974'
    },
    {
      id: 'gallery3',
      title: 'The Guardian - Berlin Wall Falls',
      description: 'Historic coverage of the fall of the Berlin Wall',
      image: '/image/im05.jpeg',
      year: '1989'
    },
    {
      id: 'gallery4',
      title: 'The Times - Royal Wedding',
      description: 'Coverage of the wedding of Prince Charles and Lady Diana',
      image: '/image/im06.jpeg',
      year: '1981'
    },
    {
      id: 'gallery5',
      title: 'The Herald - End of World War II',
      description: 'Victory celebration coverage at the end of World War II',
      image: 'https://images.unsplash.com/photo-1621600411688-4be93c2c1208?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1945'
    },
    {
      id: 'gallery6',
      title: 'The Chronicle - First Super Bowl',
      description: 'Coverage of the first Super Bowl game in sports history',
      image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1967'
    }
  ];
  
  const openModal = (item) => {
    setSelectedImage(item);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="newspaper-gallery-container">
      <div className="gallery-header">
        <h2>Historic Newspaper Collection</h2>
        <p>Browse through our collection of historic front pages that captured defining moments in history</p>
      </div>
      
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            <div className="gallery-image">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="gallery-view-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <div className="modal-year">{selectedImage.year}</div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <p className="modal-description">
                This historic newspaper is part of our premium collection, carefully preserved to maintain its original quality. 
                Each newspaper comes with a certificate of authenticity and is shipped in a protective archival sleeve.
              </p>
              <div className="modal-actions">
                <button className="modal-btn primary">Add to Cart</button>
                <button className="modal-btn secondary">View Similar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewspaperGallery;import React, { useState } from 'react';
import './NewspaperGallery.css';

const NewspaperGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryItems = [
    {
      id: 'gallery1',
      title: 'The New York Times - 1969 Moon Landing',
      description: 'Historic front page covering the Apollo 11 moon landing',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1969'
    },
    {
      id: 'gallery2',
      title: 'The Washington Post - Watergate Scandal',
      description: 'Coverage of the Watergate scandal that led to President Nixon\'s resignation',
      image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1974'
    },
    {
      id: 'gallery3',
      title: 'The Guardian - Berlin Wall Falls',
      description: 'Historic coverage of the fall of the Berlin Wall',
      image: 'https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1989'
    },
    {
      id: 'gallery4',
      title: 'The Times - Royal Wedding',
      description: 'Coverage of the wedding of Prince Charles and Lady Diana',
      image: 'https://images.unsplash.com/photo-1591983358615-662ef49ed987?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1981'
    },
    {
      id: 'gallery5',
      title: 'The Herald - End of World War II',
      description: 'Victory celebration coverage at the end of World War II',
      image: 'https://images.unsplash.com/photo-1621600411688-4be93c2c1208?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1945'
    },
    {
      id: 'gallery6',
      title: 'The Chronicle - First Super Bowl',
      description: 'Coverage of the first Super Bowl game in sports history',
      image: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      year: '1967'
    }
  ];
  
  const openModal = (item) => {
    setSelectedImage(item);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="newspaper-gallery-container">
      <div className="gallery-header">
        <h2>Historic Newspaper Collection</h2>
        <p>Browse through our collection of historic front pages that captured defining moments in history</p>
      </div>
      
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => openModal(item)}
          >
            <div className="gallery-image">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <div className="gallery-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="gallery-view-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <div className="modal-year">{selectedImage.year}</div>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <p className="modal-description">
                This historic newspaper is part of our premium collection, carefully preserved to maintain its original quality. 
                Each newspaper comes with a certificate of authenticity and is shipped in a protective archival sleeve.
              </p>
              <div className="modal-actions">
                <button className="modal-btn primary">Add to Cart</button>
                <button className="modal-btn secondary">View Similar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewspaperGallery;