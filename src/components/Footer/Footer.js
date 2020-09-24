import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="page-footer">
      <ul className="list">
        <li>Case sensitive (only uppercase)</li>
        <li>Numbers within range 1-3999</li>
        <li>Supports addition, subtraction and multiplication</li>
      </ul>
    </footer>
  );
};

export default Footer;
