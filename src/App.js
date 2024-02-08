import { useState } from "react";
import PricingCard from "./component/PricingCard";
import "./styles/PricingApp.css"

function App() {
 const [selectMonthly, setSelectMonthly] = useState(true);
let Starter=["We will give you this", "We will gijadhsjaehk"]
let Pro=["We will", "We will "]
let Enterprise=["We will give you this", "We will gijadhsjaehk"]
  return (
    <div className="PricingApp">
      <div className="App-container">
        <header>
          <h1 className="header-topic">Choose A Plan</h1>
          <div className="header-row">
            <p>Billed Annually</p>
            <label className="price-switch">
            <input className="price-checkbox" 
            onChange={() =>{
              setSelectMonthly((prev) => !prev);
            }}
            type="checkbox"  />
            <div className="switch-slider"></div>
            </label>
            <p>Billed Monthly</p>
          </div>
        </header>
        
        <div className="pricing-cards">
          <PricingCard title="starter"
          price={selectMonthly ? "$ 19" : "$ 200"} list={}/>
          <PricingCard title="pro"
          price={selectMonthly ? "$ 50" : "$ 500"}/>
          <PricingCard title="Enterprise"
          price={selectMonthly ? "$ 100" : "$ 800"}/>
        </div>

      </div>
    </div>
  );
}

export default App;
