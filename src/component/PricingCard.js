import React from 'react'
import "../styles/PricingCard.css";

const PricingCard = ({title,price,features}) => {
  return (
    <div className='PricingCard'>
        <header>
            <p className='card-title'>{title}</p>
            <h1 className='card-price'>{price}</h1>
            

        </header>
        <div className='card-features'>
                <div className='features'>{features} </div>
                
                
            </div>
            <button className='card-btn'>Choose plan</button>
    </div>
  )
}

export default PricingCard