import React from 'react';
import '../styles/PricingCard.css';

const PricingCard = ({ title, price, features }) => {
  return (
    <div className='PricingCard' style={{ margin: '20px' }}>
      <header>
        <p className='card-title'>{title}</p>
        <h1 className='card-price'>{price}</h1>
      </header>

      <div className='card-features'>
        {features.map((feature, index) => {
          return (
            <div key={index} className='feature'>
              {feature}
            </div>
          );
        })}{' '}
      </div>

      <button className='card-btn'>Choose plan</button>
    </div>
  );
};

export default PricingCard;
