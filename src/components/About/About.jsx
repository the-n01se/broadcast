import React from "react";
import about_img from "../../assets/images/about_img.jpg";
import about_img_webp from "../../assets/images/about_img.webp";
import Btn from "../UI/Button";

import "./About.css";

function About(props) {

  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="about__texts">
          <h2 className="about__title">Jacob Paulaner</h2>
          <p className="about__text">
            Jacob has a background in audio engineering, and has been podcasting
            since the early days.
          </p>
          <p className="about__text">
            He’s here to help you level up your game by sharing everything he’s
            learned along the way.
          </p>
          <Btn className="about__btn" text="Meet your host" onClick={() => props.setAlertActive(true)} /> 
        </div>
        <picture className="about__img">
          <source srcSet={about_img_webp} type="image/webp" />
          <img src={about_img} alt="" />
        </picture>
      </div>
    </section>
  );
}

export default About;
