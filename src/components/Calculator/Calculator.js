import React, { useState } from 'react';
import romanToInt from '../../utils/RomanToInt';
import IntToRoman from '../../utils/IntToRoman';
import './Calculator.scss';

const Calculator = props => {
  const [firstRomanNum, setFirstRomanNum] = useState('');
  const [secondRomanNum, setSecondRomanNum] = useState('');
  const [firstIntNum, setFirstIntNum] = useState(null);
  const [secondIntNum, setSecondIntNum] = useState(null);
  const [result, setResult] = useState(null);
  const [resultInt, setResultInt] = useState(null);

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
        break;
      case 'minus':
        result = firstIntNum - secondIntNum;
        break;
      case 'multiply':
        result = firstIntNum * secondIntNum;
        break;
      default:
        console.log(`Error`);
    }

    let sum = IntToRoman(result);
    setResult(sum);
    setResultInt(result);
  }

  return (
    <main>
      <div className="app-form-wrapper">
        <div className="app-form-holder">
          <form className="app-form">
            <div className="app-form__block">
              <h3 className="app-form__ttl">Accepted Roman Symbols: <span>I, V, X, L, C, D, M</span></h3>
            </div>
            <div className="app-form__block">
              <div className="app-input">
                <input
                  className="app-input__field"
                  type="text"
                  value={firstRomanNum}
                  onChange={handleRomanNumerals}
                  onFocus={handleRomanNumerals}
                  placeholder="Roman numerals goes here..."
                />
                { firstIntNum && <span className="label">{firstIntNum}</span> }
              </div>
              <div className="app-input">
                <input
                  className="app-input__field"
                  type="text"
                  value={secondRomanNum}
                  onChange={handleRomanNumerals2}
                  onFocus={handleRomanNumerals2}
                  placeholder="Roman numerals goes here..."
                />
                { secondIntNum && <span className="label">{secondIntNum}</span> }
              </div>
            </div>

            <div className="app-form__block">
              <button onClick={(e) => HandleResultClick(e, 'plus')} className="app-form__btn">
                <span>+</span>
              </button>
              <button onClick={(e) => HandleResultClick(e, 'minus')} className="app-form__btn">
                <span>-</span>
              </button>
              <button onClick={(e) => HandleResultClick(e, 'multiply')} className="app-form__btn">
                <span className="multi">*</span>
              </button>
            </div>

            <div className="app-form__result">
              <div className={`block ${result ? `show` : `hide`}`}>
                {result}
                { resultInt && <span className="label">{resultInt}</span> }
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
};

export default Calculator;
