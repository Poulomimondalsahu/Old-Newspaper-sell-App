import React, { useState } from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for casual collectors and beginners',
      monthlyPrice: 499,
      yearlyPrice: 4999,
      features: [
        'One curated newspaper per month',
        'Basic preservation materials',
        'Digital archive access',
        'Monthly newsletter',
        'Standard shipping'
      ],
      image: 'https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Our most popular plan for enthusiasts',
      monthlyPrice: 999,
      yearlyPrice: 9999,
      features: [
        'Three curated newspapers per month',
        'Premium preservation kit',
        'Full digital archive access',
        'Exclusive collector\'s guide',
        'Priority shipping',
        'Member-only special editions'
      ],
      recommended: true,
      image: 'https://images.unsplash.com/photo-1611673982501-93eeb9c9d8a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'collector',
      name: 'Collector\'s',
      description: 'The ultimate package for serious collectors',
      monthlyPrice: 1999,
      yearlyPrice: 19999,
      features: [
        'Five curated newspapers per month',
        'Professional preservation kit',
        'Full digital archive access',
        'Personal curator assistance',
        'Express shipping',
        'Exclusive events access',
        'Rare finds priority'
      ],
      image: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
  
  const togglePlan = (plan) => {
    setSelectedPlan(plan);
  };
  
  const getPrice = (plan) => {
    return selectedPlan === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };
  
  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const yearlyCost = plan.yearlyPrice;
    return monthlyCost - yearlyCost;
  };

  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h2>Newspaper Subscription Plans</h2>
        <p>Subscribe to receive curated vintage newspapers delivered to your doorstep</p>
        
        <div className="plan-toggle">
          <button 
            className={`toggle-btn ${selectedPlan === 'monthly' ? 'active' : ''}`}
            onClick={() => togglePlan('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`toggle-btn ${selectedPlan === 'yearly' ? 'active' : ''}`}
            onClick={() => togglePlan('yearly')}
          >
            Yearly <span className="save-badge">Save up to ₹4,000</span>
          </button>
        </div>
      </div>
      
      <div className="plans-grid">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`plan-card ${plan.recommended ? 'recommended' : ''}`}
          >
            {plan.recommended && (
              <div className="recommended-badge">Most Popular</div>
            )}
            
            <div className="plan-image">
              <img src={plan.image} alt={plan.name} />
            </div>
            
            <div className="plan-content">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price">
                <span className="price-amount">₹{getPrice(plan)}</span>
                <span className="price-period">/{selectedPlan === 'monthly' ? 'month' : 'year'}</span>
              </div>
              
              {selectedPlan === 'yearly' && (
                <div className="yearly-savings">
                  Save ₹{getSavings(plan)} per year
                </div>
              )}
              
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="subscribe-btn">Subscribe Now</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="subscription-note">
        <i className="fas fa-info-circle"></i>
        <p>All subscriptions include free cancellation at any time. Shipping included for addresses within India.</p>
      </div>
    </div>
  );
};

export default SubscriptionPlans;