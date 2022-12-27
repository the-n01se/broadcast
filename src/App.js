import './App.css';
import {spotify_icon, } from "./assets/images"

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="header__menu">
          <a href="#" className="logo__link">
            <img src="./" alt="castaway logo" className="logo__img" />
          </a>
          <ul className="menu__list">
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">Home</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">Episodes</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">About</a>
            </li>
            <li className="menu__list-item">
              <a href="#" className="menu__list-link">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header__content">
          <img src="./" alt="header image" className="header__image" />
          <div className="header__titles">
            <h1 className="header__title">Take your podcast to the <span>next</span> <span>level</span></h1>
          </div>
          <div className="header__links">
            Listen on
            <div className="players__links">
              <a href="#" className="players__link">
                <img src="./" alt="" className="players__link-image" />
              </a>
              <a href="#" className="players__link">
                <img src="./" alt="" className="players__link-image" />
              </a>
              <a href="#" className="players__link">
                <img src="./" alt="" className="players__link-image" />
              </a>
              <a href="#" className="players__link">
                <img src="./" alt="" className="players__link-image" />
              </a>
              <a href="#" className="players__link">
                <img src="./" alt="" className="players__link-image" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
