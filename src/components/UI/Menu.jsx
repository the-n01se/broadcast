import React from "react";
import { Link } from "react-scroll";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <ul className={styles.menu__list}>
      <li className={styles.menu__list_item}>
        <Link
          href="#"
          to="header"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.menu__list_link}
        >
          Home
        </Link>
      </li>
      <li className={styles.menu__list_item}>
        <Link
          href="#"
          to="episodes"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.menu__list_link}
        >
          Episodes
        </Link>
      </li>
      <li className={styles.menu__list_item}>
        <Link
          href="#"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.menu__list_link}
        >
          About
        </Link>
      </li>
      <li className={styles.menu__list_item}>
        <Link
          href="#"
          to="subscribe"
          spy={true}
          smooth={true}
          duration={500}
          className={styles.menu__list_link}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
