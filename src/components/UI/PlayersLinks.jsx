import React from "react";

import styles from "./PlayersLinks.module.css";

function PlayersLinks(props) {
  const iconsElements = props.playersLinksData.map((i) => (
    <a href={i.srcLink} className={styles.players__link}>
      <img
        src={i.srcImg}
        alt={i.altImg}
        className={styles.players__link_image}
      />
    </a>
  ));

  return <div className={styles.players__links}>{iconsElements}</div>;
}

export default PlayersLinks;
