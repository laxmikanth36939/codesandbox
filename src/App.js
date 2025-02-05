import "./App.css";
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState();
  const generateRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100);
    setNumber(number);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate a random Number</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
