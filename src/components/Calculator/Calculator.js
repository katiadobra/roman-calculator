import React, { useState } from 'react';
import romanToInt from '../utils/RomanToInt';
import IntToRoman from '../utils/IntToRoman';


const Calculator = props => {
  const [firstRomanNum, setFirstRomanNum] = useState('');
  const [secondRomanNum, setSecondRomanNum] = useState('');
  const [firstIntNum, setFirstIntNum] = useState(null);
  const [secondIntNum, setSecondIntNum] = useState(null);
  const [result, setResult] = useState(null);

  const handleRomanNumerals = (event) => {
    setFirstRomanNum(event.target.value);
    let newInt = romanToInt(event.target.value);
    setFirstIntNum(newInt);
    console.log('firstIntNum', firstIntNum);
  }

  const handleRomanNumerals2 = (event) => {
    setSecondRomanNum(event.target.value);
    let newInt = romanToInt(event.target.value);
    setSecondIntNum(newInt);
    console.log('secondIntNum', secondIntNum);
  }

  const HandleResultClick = (event, operation) => {
    event.preventDefault();
    let result;

    switch (operation) {
      case 'plus':
        result = firstIntNum + secondIntNum;
        console.log(`plus`);
        break;
      case 'minus':
        result = firstIntNum - secondIntNum;
        console.log(`minus`);
        break;
      case 'multiply':
        result = firstIntNum * secondIntNum;
        console.log(`multiply`);
        break;
      default:
        console.log(`Error`);
    }

    let sum = IntToRoman(result);
    setResult(sum);

    console.log('result', result);
  }

  return (
    <main>
      <form>
        <input
          className="app-input"
          type="text"
          value={firstRomanNum}
          onChange={handleRomanNumerals}
          onFocus={handleRomanNumerals}
          placeholder="Roman numerals goes here..."
        />
        { firstIntNum && <span>{firstIntNum}</span> }
        <input
          className="app-input"
          type="text"
          value={secondRomanNum}
          onChange={handleRomanNumerals2}
          onFocus={handleRomanNumerals2}
          placeholder="Roman numerals goes here..."
        />
        { secondIntNum && <span>{secondIntNum}</span> }
        <button onClick={(e) => HandleResultClick(e, 'plus')}>+</button>
        <button onClick={(e) => HandleResultClick(e, 'minus')}>-</button>
        <button onClick={(e) => HandleResultClick(e, 'multiply')}>*</button>
        { result && <span>Result: {result}</span> }
      </form>
    </main>
  )
};

export default Calculator;
