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
  }
];

const feedbackCardData = [
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

const feedbackIconData = [
  {
    id: 1,
    icon: <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.01265 14.135L13.1626 16.645C13.9226 17.105 14.8526 16.425 14.6526 15.565L13.5526 10.845L17.2226 7.665C17.8926 7.085 17.5326 5.985 16.6526 5.915L11.8226 5.505L9.93265 1.045C9.59265 0.235 8.43265 0.235 8.09265 1.045L6.20265 5.495L1.37265 5.905C0.492646 5.975 0.132646 7.075 0.802646 7.655L4.47265 10.835L3.37265 15.555C3.17265 16.415 4.10265 17.095 4.86265 16.635L9.01265 14.135Z"
        fill="#FCFF51"
      />
    </svg>
  },
  {
    id: 2,
    icon: <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.01265 14.135L13.1626 16.645C13.9226 17.105 14.8526 16.425 14.6526 15.565L13.5526 10.845L17.2226 7.665C17.8926 7.085 17.5326 5.985 16.6526 5.915L11.8226 5.505L9.93265 1.045C9.59265 0.235 8.43265 0.235 8.09265 1.045L6.20265 5.495L1.37265 5.905C0.492646 5.975 0.132646 7.075 0.802646 7.655L4.47265 10.835L3.37265 15.555C3.17265 16.415 4.10265 17.095 4.86265 16.635L9.01265 14.135Z"
        fill="#404040"
      />
    </svg>
  }
]

const footerIconData = [
  {
    id: 1,
    role: instagram,
    icon: <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="footer__social-img"
    >
      <path
        d="M17 2.4375H7C4.23858 2.4375 2 4.67608 2 7.4375V17.4375C2 20.1989 4.23858 22.4375 7 22.4375H17C19.7614 22.4375 22 20.1989 22 17.4375V7.4375C22 4.67608 19.7614 2.4375 17 2.4375Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 11.8073C16.1234 12.6395 15.9812 13.4895 15.5937 14.2363C15.2062 14.9831 14.5931 15.5887 13.8416 15.967C13.0901 16.3452 12.2384 16.4769 11.4077 16.3432C10.5771 16.2096 9.80971 15.8174 9.21479 15.2225C8.61987 14.6275 8.22768 13.8602 8.09402 13.0295C7.96035 12.1988 8.09202 11.3472 8.47028 10.5957C8.84854 9.84417 9.45414 9.23106 10.2009 8.84356C10.9477 8.45606 11.7977 8.3139 12.63 8.43732C13.4789 8.5632 14.2648 8.95878 14.8716 9.56562C15.4785 10.1725 15.8741 10.9584 16 11.8073Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 6.9375H17.51"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg >
  },
  {
    id: 2,
    role: twitter,
    icon: <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="footer__social-img"
    >
      <path
        d="M23 3.4373C22.0424 4.11278 20.9821 4.62941 19.86 4.96731C19.2577 4.27482 18.4573 3.784 17.567 3.56123C16.6767 3.33847 15.7395 3.3945 14.8821 3.72176C14.0247 4.04902 13.2884 4.63171 12.773 5.39102C12.2575 6.15034 11.9877 7.04964 12 7.9673V8.96729C10.2426 9.01286 8.50127 8.62312 6.93101 7.83275C5.36074 7.04238 4.01032 5.87594 3 4.4373C3 4.4373 -1 13.4373 8 17.4373C5.94053 18.8353 3.48716 19.5362 1 19.4373C10 24.4373 21 19.4373 21 7.93729C21 7.65729 20.97 7.37731 20.92 7.10731C21.9406 6.1008 22.6608 4.83002 23 3.4373Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  },
  {
    id: 3,
    role: facebook,
    icon: <svg
      width="12"
      height="23"
      viewBox="0 0 12 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="footer__social-img"
    >
      <path
        d="M11 1.4375H8C6.6739 1.4375 5.4021 1.96428 4.4645 2.90197C3.5268 3.83965 3 5.11142 3 6.4375V9.4375H0V13.4375H3V21.4375H7V13.4375H10L11 9.4375H7V6.4375C7 6.17228 7.1054 5.91793 7.2929 5.73039C7.4804 5.54286 7.7348 5.4375 8 5.4375H11V1.4375Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  }
]

const footerMenuData = [
  {
    id: 1,
    text: "Style Guide"
  },
  {
    id: 2,
    text: "Instructions"
  },
  {
    id: 3,
    text: "Changelog"
  },
  {
    id: 4,
    text: "Credit"
  },
  {
    id: 5,
    text: "Powered by Webflow"
  },
  {
    id: 6,
    text: "Licenses"
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App menuData={menuData} playersLinksData={playersLinksData} episodesData={episodesData} feedbackCardData={feedbackCardData} feedbackIconData={feedbackIconData} footerIconData={footerIconData} footerMenuData={footerMenuData} />
  </React.StrictMode>
);
