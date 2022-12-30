import React from "react";
import about_img from "../../assets/images/about_img.jpg";

import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__texts">
          <h3 className="about__title">Jacob Paulaner</h3>
          <p className="about__text">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p className="about__text">
            He’s here to help you level up your game by sharing everything he’s
            learned along the way.
          </p>
          <button className="about__btn">
            <span>Meet your host</span>
            <svg
              width="41"
              height="17"
              viewBox="0 0 41 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.40439 8.65621H39.8091M39.8091 8.65621L29.1874 1.32861M39.8091 8.65621L29.1874 15.984"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <img className="about__img" src={about_img} alt="about img" />
      </div>
    </section>
  );
}

export default About;
