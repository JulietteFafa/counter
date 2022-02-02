import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Menos from "./components/Menos";
import Mas from "./components/Mas";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);
  const handleMenos = () => {
    setCounter(counter - 1);
  };
  const handleMas = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Header />
      <div className="masomenos">
        {counter > 0 ? <Menos handleMenos={handleMenos} /> : null}
        <p className="counter">{counter}</p>
        {counter < 11 && <Mas handleMas={handleMas} />}
      </div>
      <div className="reset">{<Reset handleReset={handleReset} />}</div>
    </div>
  );
}

export default App;
