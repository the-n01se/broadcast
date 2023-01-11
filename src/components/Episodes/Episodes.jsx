import React from "react";

import "./Episodes.css";

import Btn from "../UI/Button";
import Card from "./EpisodesCard";

function Episodes(props) {
  const cardElements = props.episodesData.map((c) => (
    <Card
      id={c.id}
      srcImg={c.srcImg}
      srcImgWebp={c.srcImgWebp}
      tag={c.tag}
      counter={c.counter}
      title={c.title}
      descr={c.descr}
      key={c.id}
    />
  ));
  return (
    <section className="episodes" id="episodes">
      <div className="episodes__titles">
        <h3 className="episodes__title">Latest episodes</h3>
        <Btn text="View all episodes" />
      </div>
      <div className="episodes__cards">{cardElements}</div>
    </section>
  );
}

export default Episodes;
