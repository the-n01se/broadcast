import React from "react";


import Btn from "../UI/Button.jsx";

import styles from "./EpisodesCard.module.css";

function Card(props) {
  return (
    <div className={styles.episodes__card}>
      <img src={props.srcImg} alt={`card img ${props.id}`} className={styles.card__img} />
      <div className={styles.card__content}>
        <p className={styles.card__tag}>{props.tag}</p>
        <p className={styles.card__counter}>{`Episode ${props.counter}`}</p>
        <p className={styles.card__title}>{props.title}</p>
        <p className={styles.card__descr}>
        {props.descr}
        </p>
        <Btn className={styles.card__btn} text="View Episode Details" />
      </div>
    </div>
  );
}

export default Card;
