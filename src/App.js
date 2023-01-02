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
        <Header playersLinksData={props.playersLinksData} />
        <Episodes episodesData={props.episodesData} />
        <About />
        <Subscribe /> 
        <Feedback feedbackData={props.feedbackData} />
        <Footer playersLinksData={props.playersLinksData} />
      </div>
    </div>
  );
  
}

// animation
// adaptive
// accesability
// work of forms
// popup
// playerslinks data
// link

export default App;
