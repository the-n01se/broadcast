import React from "react";

import styles from "./FeedbackCard.module.css";

function Card(props) {
  const goldStar = props.stars[0].icon;
  const greyStar = props.stars[1].icon;

  const starsArr = [];

  for (var i = 0; i < 5; i++) {
    starsArr[i] = goldStar;
  }

  var grade = props.grade;

  for (var j = 1; j < 5; j++) {
    if (grade === j) {
      for (var k = j; k < 5; k++) {
        starsArr[k] = greyStar;
      }
    }
  }

  return (
    <div className={styles.feedback__card}>
      <div className={styles.card__stars}>{starsArr}</div>
      <p className={styles.card__text}>{props.text}</p>
      <p className={styles.card__author}>{props.author}</p>
    </div>
  );
}

export default Card;
