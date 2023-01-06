import React from "react";
import { Link } from "react-scroll";

import styles from "./Menu.module.css";

function Menu(props) {
  // const menuElements = props.menuData.map((m) => (
  //   <li className={styles.menu__list_item}>
  //     <Link
  //       to={m.link}
  //       spy={true}
  //       smooth={true}
  //       duration={500}
  //       className={styles.menu__list_link}
  //     >
  //       {m.text}
  //     </Link>
  //   </li>
  // ));
  return (
    <ul className={styles.menu__list}>
      <li className={styles.menu__list_item}>
        <Link
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
