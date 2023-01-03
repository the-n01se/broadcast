import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Episodes from './components/Episodes/Episodes';
import About from './components/About/About';
import Subscribe from './components/Subscribe/Subscribe';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Header name="header" playersLinksData={props.playersLinksData} />
        <Episodes name="episodes" episodesData={props.episodesData} />
        <About name="about" />
        <Subscribe name="subscribe" /> 
        <Feedback feedbackData={props.feedbackData} />
        <Footer playersLinksData={props.playersLinksData} />
      </div>
    </div>
  );
  
}

// ceo
// animation
// adaptive
// accesability
// work of forms
// popup
// playerslinks data
// popup blocks
// footer component

export default App;
