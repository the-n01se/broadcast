import React from "react";

import styles from "./PlayersLinks.module.css";

function PlayersLinks(props) {
  const iconsElements = props.playersLinksData.map((i) => (
    <button href={i.srcLink} className={styles.players__link} key={i.id} onClick={() => setAlertActive(true)}>
      <img
        src={i.srcImg}
        alt={i.altImg}
        className={styles.players__link_image}
      />
    </button>
  ));
  const setAlertActive = props.setAlertActive;

  return <div className={styles.players__links}>{iconsElements}</div>;
}

export default PlayersLinks;
