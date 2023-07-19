import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function generateTwoNumbers() {
  return [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
}

function App() {
  const [numbers, setNumbers] = useState([]);
  const [firstNumber, secondNumber] = numbers;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className='number'>{firstNumber}</div>
          <div className='number'>{secondNumber}</div>
        </div>

        {(firstNumber === secondNumber) && (
          <h1>MATCH!</h1>
        )}

        <button onClick={() => {
          const randomNumbers = generateTwoNumbers();
          setNumbers(randomNumbers);
        }}>Generate 2 random numbers</button>
      </header>
    </div>
  );
}

export default App;
