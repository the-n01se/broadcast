import React from "react";

import Btn from "../UI/Button.jsx";

import "./Subscribe.css";

function Subscribe(props) {
  return (
    <section className="subscribe" id="subscribe">
      <div className="subscribe__inner">
        <div className="subscribe__titles">
          <p className="subscribe__subtitle">Email Newsletter</p>
          <h3 className="subscribe__title">Subscribe for updates</h3>
        </div>
        <div className="subscribe__forms">
          <input className="subscribe__input" type="text" placeholder="Name" />
          <input className="subscribe__input" type="text" placeholder="Email" />
          <Btn classname="subscribe__btn" text="Submit" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
