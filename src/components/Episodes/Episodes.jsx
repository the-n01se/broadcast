import React from "react";

import './Episodes.css';

import Btn from '../UI/Button';
import Card from "./Card";

function Episodes(props) {

  const cardElements = props.cardData.map(c => (<Card id={c.id} srcImg={c.srcImg} tag={c.tag} counter={c.counter} title={c.title} descr={c.descr} />))
  return (
    <section className="episodes">
      <div className="episodes__titles">
        <h3 className="episodes__title">Latest episodes</h3>
        <Btn text="View all episodes" />
      </div>
      <div className="episodes__cards">
        {cardElements}
      </div>
    </section>
  );
}

export default Episodes;