import React from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div>
      <header>
        <h1>Roman calculator</h1>
        <p>Add 2 Roman numerals together. The answer will also be represented as a Roman numeral.</p>
        <small>Roman numerals only include whole numbers, except zero.</small>
      </header>
      <Calculator />
      <footer>
        <ul>
          <li>Case sensitive (only uppercase)</li>
          <li>Numbers within range 1-3999</li>
          <li>Supports addition, subtraction and multiplication</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
