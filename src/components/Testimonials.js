import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Collector',
      text: 'I\'ve been collecting newspapers for over 20 years, and this is by far the best place to find rare editions. The quality and authenticity are unmatched!',
      rating: 5,
      image: './image/im17.jpeg'
    },
    {
      id: 2,
      name: 'Mary Smith',
      role: 'Historian',
      text: 'As a historian, I rely on authentic sources for my research. The newspapers I\'ve purchased here have been invaluable for my work on 20th century events.',
      rating: 5,
      image: '/image/im01.jpeg'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Enthusiast',
      text: 'I bought a bundle of 1970s newspapers as a gift for my father. He was thrilled to revisit the headlines from his youth. Great service and fast delivery!',
      rating: 4,
      image: '/image/im02.jpg'
    }
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            text={testimonial.text}
            rating={testimonial.rating}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;import React from 'react';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Collector',
      text: 'I\'ve been collecting newspapers for over 20 years, and this is by far the best place to find rare editions. The quality and authenticity are unmatched!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Mary Smith',
      role: 'Historian',
      text: 'As a historian, I rely on authentic sources for my research. The newspapers I\'ve purchased here have been invaluable for my work on 20th century events.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      role: 'Enthusiast',
      text: 'I bought a bundle of 1970s newspapers as a gift for my father. He was thrilled to revisit the headlines from his youth. Great service and fast delivery!',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard 
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            text={testimonial.text}
            rating={testimonial.rating}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;