import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import spotify_icon from "./assets/images/spotify_icon.svg";
import soundcloud_icon from "./assets/images/soundcloud_icon.svg";
import overcast_icon from "./assets/images/overcast_icon.svg";
import applePodcasts_icon from "./assets/images/apple-podcasts_icon.svg";
import pocketCasts_icon from "./assets/images/pocket-casts_icon.svg";

const iconsData = [
  {
    srcImg: spotify_icon,
    altImg: "spotify link",
    srcLink: "#"
  },
  {
    srcImg: pocketCasts_icon,
    altImg: "pocket casts link",
    srcLink: "#"
  },
  {
    srcImg: soundcloud_icon,
    altImg: "soundcloud link",
    srcLink: "#"
  },
  {
    srcImg: applePodcasts_icon,
    altImg: "apple podcasts link",
    srcLink: "#"
  },
  {
    srcImg: overcast_icon,
    altImg: "overcast link",
    srcLink: "#"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App iconsData={iconsData} />
  </React.StrictMode>
);
