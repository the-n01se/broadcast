import React from "react";

import styles from './Button.module.css';

function Btn(props) {
  return <button className={styles.btn}><slot>{props.text}</slot></button>;
}

export default Btn;
