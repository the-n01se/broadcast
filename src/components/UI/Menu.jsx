import React from 'react';

import styles from './Menu.module.css';

function Menu() {
  return ( 
    <ul className={styles.menu__list}>
          <li className={styles.menu__list_item}>
            <a href="#" className={styles.menu__list_link}>
              Home
            </a>
          </li>
          <li className={styles.menu__list_item}>
            <a href="#" className={styles.menu__list_link}>
              Episodes
            </a>
          </li>
          <li className={styles.menu__list_item}>
            <a href="#" className={styles.menu__list_link}>
              About
            </a>
          </li>
          <li className={styles.menu__list_item}>
            <a href="#" className={styles.menu__list_link}>
              Contact
            </a>
          </li>
        </ul>
   );
}

export default Menu;