import React from "react";

import styles from "./FeedbackCard.module.css";

function Card(props) {
  const goldStar = 
    <svg
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
    </svg>;

  const greyStar = 
  <svg
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
  </svg>;

  const stars = [];
  for (var i = 0; i < 5; i++) {
    stars[i] = goldStar;
  }

  var grade = props.grade;

  for(var j = 1; j < 5; j++) {
    if(grade === j) {
      for(var k = j; k < 5; k++) {
        stars[k] = greyStar;
      }
    }
  }

  return (
    <div className={styles.feedback__card}>
      <div className={styles.card__stars}>{stars}</div>
      <p className={styles.card__text}>{props.text}</p>
      <p className={styles.card__author}>{props.author}</p>
    </div>
  );
}

export default Card;
