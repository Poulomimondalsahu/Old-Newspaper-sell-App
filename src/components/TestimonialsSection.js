import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajiv Sharma',
      role: 'History Professor, Delhi University',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'The quality and authenticity of these historical newspapers have been invaluable for my research on post-independence India. My students love examining primary sources from the era.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Malhotra',
      role: 'Collector & Enthusiast',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'I ordered a newspaper from my grandfather\'s birthday in 1952 as a gift for his 90th birthday. He was moved to tears seeing the headlines from that day. Priceless!',
      rating: 5
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Museum Curator',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      quote: 'We\'ve sourced several rare newspapers for our exhibition on the Emergency period. The preservation quality is exceptional, and the team was extremely helpful in finding specific editions.',
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`bi ${i <= rating ? 'bi-star-fill' : 'bi-star'} text-warning`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">What Our Customers Say</h2>
          <p className="lead text-muted">Trusted by collectors, historians, and institutions across India</p>
        </div>

        <div className="row">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm testimonial-card">
                <div className="card-body p-4">
                  <div className="d-flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="card-text testimonial-quote">
                    <i className="bi bi-quote fs-1 text-primary opacity-25 position-absolute start-0 top-0 ms-3 mt-3"></i>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 px-4 pb-4">
                  <div className="d-flex align-items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mt-5">
            <div className="client-logo opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/National_Archives_of_India_Logo.svg/220px-National_Archives_of_India_Logo.svg.png" alt="National Archives" height="50" />
            </div>
            <div className="client-logo opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Nehru_Memorial_Museum_%26_Library_Logo.svg/220px-Nehru_Memorial_Museum_%26_Library_Logo.svg.png" alt="Nehru Memorial Museum" height="50" />
            </div>
            <div className="client-logo opacity-50">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Indian_Council_of_Historical_Research_Logo.svg/220px-Indian_Council_of_Historical_Research_Logo.svg.png" alt="Historical Research Council" height="50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;