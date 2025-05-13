import React, { useState } from "react";
import "./calc.css"; // External CSS file

function Calc() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const addition = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
  };

  const subtraction = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
  };

  const multiplication = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
  };

  const division = () => {
    if (parseFloat(input2) === 0) {
      setResult("Cannot divide by 0");
    } else {
      setResult(parseFloat(input1) / parseFloat(input2));
    }
  };

  const clearall = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div className="calc-container">
      <h2>Simple Calculator</h2>
      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Input 1:</label>
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div>
          <label>Input 2:</label>
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div>
          <label>Result:</label>
          <input type="text" value={result} readOnly />
        </div>
      </form>

      <div className="btn-group">
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>×</button>
        <button onClick={division}>÷</button>
        <button onClick={clearall} className="clear-btn">
          Clear
        </button>
      </div>
    </div>
  );
}

export default Calc;
