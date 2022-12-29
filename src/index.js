import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import spotify_icon from "./assets/images/spotify_icon.svg";
import soundcloud_icon from "./assets/images/soundcloud_icon.svg";
import overcast_icon from "./assets/images/overcast_icon.svg";
import applePodcasts_icon from "./assets/images/apple-podcasts_icon.svg";
import pocketCasts_icon from "./assets/images/pocket-casts_icon.svg";

import ep_1 from "./assets/images/episode_1.jpg";
import ep_2 from "./assets/images/episode_2.jpg";
import ep_3 from "./assets/images/episode_3.jpg";

const iconsData = [
  {
    id: 1,
    srcImg: spotify_icon,
    altImg: "spotify link",
    srcLink: "#"
  },
  {
    id: 2,
    srcImg: pocketCasts_icon,
    altImg: "pocket casts link",
    srcLink: "#"
  },
  {
    id: 3,
    srcImg: soundcloud_icon,
    altImg: "soundcloud link",
    srcLink: "#"
  },
  {
    id: 4,
    srcImg: applePodcasts_icon,
    altImg: "apple podcasts link",
    srcLink: "#"
  },
  {
    id: 5,
    srcImg: overcast_icon,
    altImg: "overcast link",
    srcLink: "#"
  }
];

const cardData = [
  {
    id: 1,
    srcImg: ep_1,
    tag: "Gear",
    counter: 1,
    title: "The best microphone under $200",
    descr: "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks."
  },
  {
    id: 2,
    srcImg: ep_2,
    tag: "Tips & Tricks",
    counter: 2,
    title: "Mic tricks to take you to the next level",
    descr: "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great."
  },
  {
    id: 3,
    srcImg: ep_3,
    tag: "Gear",
    counter: 3,
    title: "Should you get outboard audio gear?",
    descr: "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up."
  },

]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App iconsData={iconsData} cardData={cardData} />
  </React.StrictMode>
);
