import { React, useState } from "react";
import './App.css';

import Header from './components/Header/Header'
import Episodes from './components/Episodes/Episodes';
import About from './components/About/About';
import Subscribe from './components/Subscribe/Subscribe';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import PopupAlert from './components/UI/PopupAlert';

function App(props) {
  const [alertActive, setAlertActive] = useState(false);
  return (
    <div className="App">
      <PopupAlert alertActive={alertActive} setAlertActive={setAlertActive} />
      <div className="container">
        <Header name="header" menuData={props.menuData} playersLinksData={props.playersLinksData} setAlertActive={setAlertActive} />
        <Episodes name="episodes" episodesData={props.episodesData} setAlertActive={setAlertActive} />
        <About name="about" setAlertActive={setAlertActive} />
        <Subscribe name="subscribe" setAlertActive={setAlertActive} />
        <Feedback feedbackData={props.feedbackData} />
        <Footer playersLinksData={props.playersLinksData} footerIconData={props.footerIconData} setAlertActive={setAlertActive} footerMenuData={props.footerMenuData} />
      </div>
    </div>
  );

}

export default App;
