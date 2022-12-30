import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Episodes from './components/Episodes/Episodes';
import About from './components/About/About';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Header iconsData={props.iconsData} />
        <Episodes cardData={props.cardData} />
        <About />
      </div >
    </div >
  );
  
}

export default App;
