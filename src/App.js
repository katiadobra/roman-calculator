import React from 'react';
import Calculator from './components/Calculator/Calculator';
import Aux from './components/Aux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/index.scss';

function App() {
  return (
    <Aux>
      <Header />
      <Calculator />
      <Footer />
    </Aux>
  );
}

export default App;
