import React from "react";
import { Link } from "react-scroll";

import styles from "./Menu.module.css";

function Menu(props) {
  const menuElements = props.menuData.map((m) => (
    <li key={m.id} className={styles.menu__list_item}>
      <Link
        href="#"
        to={m.link}
        spy={true}
        smooth={true}
        duration={500}
        className={styles.menu__list_link}
      >
        {m.text}
      </Link>
    </li>
  ));
  return <ul className={styles.menu__list}>{menuElements}</ul>;
}

export default Menu;
