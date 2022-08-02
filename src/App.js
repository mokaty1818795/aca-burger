import "./App.css";
import BaseBread from "./Components/BaseBread";
import Meat from "./Components/Meat";
import Tomato from "./Components/Tomato";
import Topbread from "./Components/Topbread";
import Lattice from "./Components/Lattice";
import { useState } from "react";
function App() {

  const [isShownTomato, setIsShownTomtato] = useState(true);
  const [isShownMeat, setIsShownMeat] = useState(true);
  const [isShownLatttice, setIsShownLattice] = useState(true);

  const handleClickTomato = (event) => {
    setIsShownTomtato((current) => !current);
  };

  const handleClickLattice = (event) => {
    setIsShownLattice((current) => !current);
  };

   const handleClickMeat = (event) => {
     setIsShownMeat((current) => !current);
   };

  const tomato = "Tomato";
  const meat = "Meat";
  const lattice = "Lattice";

  return (
    <div className="App">
      <header className="App-header">
        <Topbread />
        {
          isShownTomato && 
          <Tomato ingredient={tomato} />
        }
        {
          isShownMeat && 
          <Meat ingredient={meat} />
        }
        {
          isShownLatttice &&
           <Lattice ingredient={lattice} />
        }
        <BaseBread />


        <div className="button-group">
          <button 
            onClick={handleClickTomato} 
            className="tomato-action"
          >
            Remove Tomato
          </button>

          <button 
            onClick={handleClickMeat} 
            className="tomato-action"
          >
            Remove Meat
          </button>

          <button 
            onClick={handleClickLattice}
            className="tomato-action"
          >
            Remove Lattice
          </button>
        </div>
        
      </header>
    </div>
  );
}

export default App;
