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
import ep_1_webp from "./assets/images/episode_1.webp";
import ep_2_webp from "./assets/images/episode_2.webp";
import ep_3_webp from "./assets/images/episode_3.webp";

const menuData = [
  {
    id: 1,
    text: 'Home',
    link: 'header'
  },
  {
    id: 2,
    text: 'Episodes',
    link: 'episodes'
  },
  {
    id: 3,
    text: 'About',
    link: 'about'
  },
  {
    id: 4,
    text: 'Contact',
    link: 'subscribe'
  }
];

const playersLinksData = [
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

const episodesData = [
  {
    id: 1,
    srcImg: ep_1,
    srcImgWebp: ep_1_webp,
    tag: "Gear",
    counter: 1,
    title: "The best microphone under $200",
    descr: "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks."
  },
  {
    id: 2,
    srcImg: ep_2,
    srcImgWebp: ep_2_webp,
    tag: "Tips & Tricks",
    counter: 2,
    title: "Mic tricks to take you to the next level",
    descr: "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great."
  },
  {
    id: 3,
    srcImg: ep_3,
    srcImgWebp: ep_3_webp,
    tag: "Gear",
    counter: 3,
    title: "Should you get outboard audio gear?",
    descr: "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up."
  },
];

const feedbackData = [
  {
    id: 1,
    grade: 1,
    text: "I can’t recommend this podcast enough",
    author: "Betty Lacey"
  },
  {
    id: 2,
    grade: 5,
    text: "Jacob is the best in the business",
    author: "Adam Driver"
  },
  {
    id: 3,
    grade: 4,
    text: "A wealth of audio knowledge",
    author: "Marcus Brown"
  },
  {
    id: 4,
    grade: 5,
    text: "Every episode is a gem!",
    author: "Jessica Knowl"
  },
  {
    id: 5,
    grade: 3,
    text: "Whoa whoa, let me take some notes!",
    author: "Scott Adams"
  },
  {
    id: 6,
    grade: 5,
    text: "I’ve upped my game considerably since I started listening",
    author: "Steven Blast"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App menuData={menuData} playersLinksData={playersLinksData} episodesData={episodesData} feedbackData={feedbackData} />
  </React.StrictMode>
);
