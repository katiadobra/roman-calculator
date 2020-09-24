import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="page-header">
      <h1>Roman calculator</h1>
      <p>Add 2 Roman numerals together. <br />
      The answer will also be represented as a Roman numeral.</p>
      <small>*Roman numerals only include whole numbers, except zero.</small>
    </header>
  );
};

export default Header;
