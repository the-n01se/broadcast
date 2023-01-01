import React from "react";
import about_img from "../../assets/images/about_img.jpg";
import Btn from "../UI/Button";

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
          <Btn className="about__btn" text="Meet your host" /> 
        </div>
        <img className="about__img" src={about_img} alt="about img" />
      </div>
    </section>
  );
}

export default About;
