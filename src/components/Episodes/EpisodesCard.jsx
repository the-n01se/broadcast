import React from "react";

import Btn from "../UI/Button.jsx";

import styles from "./EpisodesCard.module.css";

function Card(props) {
  return (
    <div className={styles.episodes__card}>
      <picture className={styles.card__img}>
        <source srcSet={props.srcImgWebp} type="image/webp" />
        <img src={props.srcImg} alt={`card img ${props.id}`} />
      </picture>
      <div className={styles.card__content}>
        <div className={styles.card__content_top}>
          <p className={styles.card__counter}>{`Episode ${props.counter}`}</p>
          <p className={styles.card__tag}>{props.tag}</p>
        </div>
        <h3 className={styles.card__title}>{props.title}</h3>
        <p className={styles.card__descr}>{props.descr}</p>
        <Btn className={styles.card__btn} text="View Episode Details" />
      </div>
    </div>
  );
}

export default Card;
