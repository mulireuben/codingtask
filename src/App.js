import { useState } from 'react';
import PricingCard from './component/PricingCard';
import './styles/PricingApp.css';

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  const [starterList, setStarterList] = useState(true);
  const [proList, setProList] = useState(true);
  const [enterpriseList, setEnterpriseList] = useState(true);

  const starterMonthlyList = [
    'Unlimited Monthly  Bandwidth',
    'Unlimited Monthly Disk',
    'Unlimited Monthly Domain',
    'Unlimited  MonthlyEmail',
  ];
  const starterAnnuallyList = [
    'Unlimited Annual Bandwidth',
    'Unlimited Annual Disk',
    'Unlimited Annual Domain',
    'Unlimited Annual',
  ];
  const proListMonthly = [
    'Unlimited Monthly Bandwidth',
    'Unlimited MonthlyDisk',
    'Unlimited MonthlyDomain',
    'UnlimitedMonthly Email',
  ];
  const proListAnnually = [
    'Unlimited Annual Bandwidth',
    'Unlimited Annual Disk',
    'Unlimited  Annual Domain',
    'Unlimited  AnnualEmail',
  ];
  const enterpriseListMonthly = [
    'Unlimited Monthly Bandwidth',
    'Unlimited  MonthlyDisk',
    'Unlimited Monthly Domain',
    'Unlimited Monthly Email',
  ];
  const enterpriseListAnnually = [
    'Unlimited Annual Bandwidth',
    'Unlimited Annual Disk',
    'Unlimited Annual Domain',
    'Unlimited Annual Email',
  ];
  const getStarterList = () => {
    if (selectMonthly) {
      return starterMonthlyList;
    } else {
      return starterAnnuallyList;
    }
  };
  const getProList = () => {
    if (selectMonthly) {
      return proListMonthly;
    } else {
      return proListAnnually;
    }
  };
  const getEnterpriseList = () => {
    if (selectMonthly) {
      return enterpriseListMonthly;
    } else {
      return enterpriseListAnnually;
    }
  };

  return (
    <div className='PricingApp'>
      <div className='App-container'>
        <header>
          <h1 className='header-topic'>Choose A Plan</h1>
          <div className='header-row'>
            <p>Billed Annually</p>
            <label className='price-switch'>
              <input
                className='price-checkbox'
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type='checkbox'
              />
              <div className='switch-slider'></div>
            </label>
            <p>Billed Monthly</p>
          </div>
        </header>

        <div className='pricing-cards'>
          <PricingCard
            title='starter'
            price={selectMonthly ? '$ 19' : '$ 200'}
            features={getStarterList()}
          />
          <PricingCard
            title='pro'
            price={selectMonthly ? '$ 50' : '$ 500'}
            features={getProList()}
          />
          <PricingCard
            title='Enterprise'
            price={selectMonthly ? '$ 100' : '$ 800'}
            features={getEnterpriseList()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
