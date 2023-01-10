import React from "react";

import "./Feedback.css";
import Card from "./FeedbackCard";

function Feedback(props) {
  const cardElements = props.feedbackData.map((f) => (
    <Card grade={f.grade} text={f.text} author={f.author} key={f.id} />
  ));

  return (
    <section className="feedback">
      <div className="feedback__cards">{cardElements}</div>
    </section>
  );
}

export default Feedback;
