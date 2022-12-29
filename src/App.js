import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Episodes from './components/Episodes/Episodes';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Header iconsData={props.iconsData} />
        <Episodes cardData={props.cardData} />
      </div >
    </div >
  );
  
}

export default App;
