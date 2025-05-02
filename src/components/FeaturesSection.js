import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: 'bi-search',
      title: 'Historical Archive Search',
      description: 'Search through thousands of newspapers by date, event, or keyword to find exactly what you\'re looking for.',
      color: 'primary'
    },
    {
      id: 2,
      icon: 'bi-calendar-date',
      title: 'Birthday Editions',
      description: 'Find newspapers published on your birth date or any special occasion for a unique personalized gift.',
      color: 'success'
    },
    {
      id: 3,
      icon: 'bi-truck',
      title: 'Worldwide Shipping',
      description: 'We carefully package and ship our vintage newspapers to collectors around the world.',
      color: 'danger'
    },
    {
      id: 4,
      icon: 'bi-shield-check',
      title: 'Authenticity Guarantee',
      description: 'Every newspaper comes with a certificate of authenticity and detailed provenance information.',
      color: 'warning'
    },
    {
      id: 5,
      icon: 'bi-box-seam',
      title: 'Preservation Kits',
      description: 'Optional acid-free storage solutions to preserve your historical newspapers for generations.',
      color: 'info'
    },
    {
      id: 6,
      icon: 'bi-camera',
      title: 'Digital Archives',
      description: 'Get high-resolution digital scans of your newspapers for easy sharing and digital preservation.',
      color: 'dark'
    }
  ];

  return (
    <div className="features-section py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Premium Features</h2>
          <p className="lead text-muted">Discover what makes our vintage newspaper collection special</p>
        </div>

        <div className="row g-4">
          {features.map(feature => (
            <div key={feature.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-card">
                <div className="card-body p-4">
                  <div className={`feature-icon-container bg-${feature.color} bg-opacity-10 mb-4`}>
                    <i className={`bi ${feature.icon} text-${feature.color}`}></i>
                  </div>
                  <h4 className="card-title">{feature.title}</h4>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                  <button className={`btn btn-sm btn-outline-${feature.color}`}>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="lead">Want to learn more about our collection process?</p>
          <button className="btn btn-primary btn-lg">Watch Our Story</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;