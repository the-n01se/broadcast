import React from 'react';
import './App.css';
import logo from "./assets/images/logo.svg";
import spotify_icon from "./assets/images/spotify_icon.svg";
import soundcloud_icon from "./assets/images/soundcloud_icon.svg";
import overcast_icon from "./assets/images/overcast_icon.svg";
import applePodcasts_icon from "./assets/images/apple-podcasts_icon.svg";
import pocketCasts_icon from "./assets/images/pocket-casts_icon.svg";
import header_img from "./assets/images/header_img.jpg";


// const imagesF = {
//   logos: [
//     {
//       src: "./assets/images/spotifyIcon.svg",
//       alt: "spotify link"
//     },
//     {
//       src: "./assets/images/pocket-casts_icon.svg",
//       alt: "pocket casts link"
//     },
//     {
//       src: "./assets/images/soundcloud_icon.svg",
//       alt: "soundcloud link"
//     },
//     {
//       src: "./assets/images/apple-podcasts_icon.svg",
//       alt: "apple podcasts link"
//     },
//     {
//       src: "./assets/images/overcast_icon.svg",
//       alt: "overcast link"
//     }
//   ]
// }

function App(props) {
  return (
    <div className="App">
      <div class="container">
        <header className="header">
          <nav className="header__menu">
            <a href="#" className="logo__link">
              <img src={logo} alt="castaway logo" className="logo__img" />
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
            <div class="header__image-wrapper"><span className="header__image-decor header__image-decor--1"></span><span className="header__image-decor header__image-decor--2"></span><span className="header__image-decor header__image-decor--3"></span><img src={header_img} alt="header image" className="header__image" /></div>
            <div className="header__titles">
              <h1 className="header__title">Take your podcast to the <span className="header__title-span header__title-span--1">next</span> <span className="header__title-span header__title-span--2">level</span></h1>
              <div className="header__links">
                Listen on
                <div className="players__links">
                  <a href="#" className="players__link">
                    <img src={spotify_icon} className="players__link-image" />
                  </a>
                  <a href="#" className="players__link">
                    <img src={pocketCasts_icon} className="players__link-image" />
                  </a>
                  <a href="#" className="players__link">
                    <img src={soundcloud_icon} className="players__link-image" />
                  </a>
                  <a href="#" className="players__link">
                    <img src={applePodcasts_icon} className="players__link-image" />
                  </a>
                  <a href="#" className="players__link">
                    <img src={overcast_icon} className="players__link-image" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="header__links">
              Listen on
              <div className="players__links">
                <a href="#" className="players__link">
                  <img src={spotify_icon} alt={images.logos[0].alt} className="players__link-image" />
                </a>
                <a href="#" className="players__link">
                  <img src={pocketCasts_icon} alt={images.logos[1].alt} className="players__link-image" />
                </a>
                <a href="#" className="players__link">
                  <img src={soundcloud_icon} alt={images.logos[2].alt} className="players__link-image" />
                </a>
                <a href="#" className="players__link">
                  <img src={applePodcasts_icon} alt={images.logos[3].alt} className="players__link-image" />
                </a>
                <a href="#" className="players__link">
                  <img src={overcast_icon} alt={images.logos[4].alt} className="players__link-image" />
                </a>
              </div> */}
          </div>
        </header>
      </div >
    </div >
  );
}

export default App;
