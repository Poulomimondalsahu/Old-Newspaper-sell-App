import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, role, text, rating, image }) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
  ));

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-image">
          <img src={image} alt={name} />
        </div>
        <div className="testimonial-info">
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
      <div className="testimonial-content">
        <p>"{text}"</p>
      </div>
      <div className="testimonial-rating">
        {stars}
      </div>
    </div>
  );
};

export default TestimonialCard;