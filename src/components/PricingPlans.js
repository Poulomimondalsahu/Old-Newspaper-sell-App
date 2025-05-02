import React, { useState } from 'react';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const plans = [
    {
      id: 1,
      name: 'Collector',
      description: 'Perfect for casual collectors and history enthusiasts',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Access to standard newspaper collection',
        'Basic search functionality',
        'Standard shipping',
        'Email support',
        'Digital preview of purchases'
      ],
      popular: false,
      color: 'primary'
    },
    {
      id: 2,
      name: 'Historian',
      description: 'Ideal for serious collectors and researchers',
      monthlyPrice: 499,
      annualPrice: 4990,
      features: [
        'Access to premium rare collections',
        'Advanced search with filters',
        'Priority shipping',
        'Phone and email support',
        'Digital archives of purchases',
        'Monthly curated selection',
        'Preservation guidance'
      ],
      popular: true,
      color: 'success'
    },
    {
      id: 3,
      name: 'Institution',
      description: 'For libraries, museums, and educational institutions',
      monthlyPrice: 999,
      annualPrice: 9990,
      features: [
        'Full access to all collections',
        'Bulk ordering discounts',
        'Express shipping',
        'Dedicated account manager',
        'Complete digital archives',
        'Custom preservation solutions',
        'Research assistance',
        'Educational resources'
      ],
      popular: false,
      color: 'info'
    }
  ];

  return (
    <div className="pricing-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Membership Plans</h2>
          <p className="lead text-muted">Join our community of newspaper collectors and historians</p>
          
          <div className="pricing-toggle mt-4 d-flex align-items-center justify-content-center">
            <span className={`me-3 ${!isAnnual ? 'fw-bold' : 'text-muted'}`}>Monthly</span>
            <div className="form-check form-switch d-inline-block">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="pricingToggle" 
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
                style={{ width: '3rem', height: '1.5rem' }}
              />
              <label className="form-check-label visually-hidden" htmlFor="pricingToggle">
                Toggle pricing
              </label>
            </div>
            <span className={`ms-3 ${isAnnual ? 'fw-bold' : 'text-muted'}`}>
              Annual <span className="badge bg-danger ms-2">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map(plan => (
            <div key={plan.id} className="col-md-6 col-lg-4">
              <div className={`card h-100 pricing-card ${plan.popular ? 'border-success shadow' : 'border-light'}`}>
                {plan.popular && (
                  <div className="card-header bg-success text-white text-center py-3">
                    <span className="badge bg-white text-success">Most Popular</span>
                  </div>
                )}
                <div className="card-body p-4">
                  <h3 className="card-title">{plan.name}</h3>
                  <p className="text-muted">{plan.description}</p>
                  <div className="pricing-amount my-4 text-center">
                    <h2 className="display-4 fw-bold">
                      ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </h2>
                    <p className="text-muted mb-0">
                      {isAnnual ? 'per year' : 'per month'}
                    </p>
                  </div>
                  <hr />
                  <ul className="list-unstyled mt-4 mb-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer bg-transparent text-center p-4 border-0">
                  <button className={`btn btn-${plan.popular ? plan.color : 'outline-' + plan.color} btn-lg w-100`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="text-muted">All plans include a 14-day money-back guarantee</p>
          <p>Need a custom solution? <a href="#" className="text-decoration-none">Contact our sales team</a></p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;