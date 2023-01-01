import React from "react";

import star_icon from "../../assets/images/star.svg";

function Card(props) {
  return (
    <div className="feedback__card">
      <div className="card__stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
      </div>
      <p className="card__text">{props.text}</p>
      <p className="card__author">{props.author}</p>
    </div>
  );
}

export default Card;
