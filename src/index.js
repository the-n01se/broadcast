import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { spotify_icon } from "./assets/images/spotify_icon.svg";
// import { soundcloud_icon } from "./assets/images/soundcloud_icon.svg";
// import { overcast_icon } from "./assets/images/overcast_icon.svg";
// import { applePodcasts_icon } from "./assets/images/apple-podcasts_icon.svg";
// import { pocketCasts_icon } from "./assets/images/pocket-casts_icon.svg";

const images = {
  logos: [
    {
      src: "./assets/images/spotify_icon.svg",
      alt: "spotify link"
    },
    {
      src: "./assets/images/pocket-casts_icon.svg",
      alt: "pocket casts link"
    },
    {
      src: "./assets/images/soundcloud_icon.svg",
      alt: "soundcloud link"
    },
    {
      src: "./assets/images/apple-podcasts_icon.svg",
      alt: "apple podcasts link"
    },
    {
      src: "./assets/images/overcast_icon.svg",
      alt: "overcast link"
    }
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App images={images} />
  </React.StrictMode>
);

