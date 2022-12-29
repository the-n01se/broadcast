import React from "react";


import Btn from "../UI/Button.jsx";

function Card(props) {
  return (
    <div className="episodes__card">
      <img src={props.srcImg} alt={`card img ${props.id}`} className="card__img" />
      <div className="card__content">
        <p className="card__tag">{props.tag}</p>
        <p className="card__counter">{`Episode ${props.counter}`}</p>
        <p className="card__title">{props.title}</p>
        <p className="card__descr">
        {props.descr}
        </p>
        <Btn className="card__btn" text="View Episode Details" />
      </div>
    </div>
  );
}

export default Card;
