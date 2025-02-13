// src/Calculator.jsx
import React, { useState } from 'react';

const arrMathOperators = ['+', '-', '*', '/'];

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleCalculation = (operator) => {
    // Implement a basic calculation logic
    const calculation = new Function('return ' + result + operator + '5')();
    setResult(calculation);
  };

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="border-2 p-2"
        />
      </div>
      <div className="flex gap-2">
        {arrMathOperators.map((operator, index) => (
          <button
            key={index}
            onClick={() => handleCalculation(operator)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            {operator}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
