import React from "react";
import { Link } from "react-scroll";

import "./PopupMenu.css";

function PopupMenu(props) {
  const setMenuActive = props.setMenuActive;
  const menuActive = props.menuActive;

  const closeBtn = (
    <svg
      className="popup_menu__btn-img"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
          fill="#ffffff"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L6.53035 18.5303C6.23745 18.8232 5.76258 18.8232 5.46969 18.5303C5.17679 18.2374 5.17679 17.7626 5.46968 17.4697L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967Z"
          fill="#ffffff"
        ></path>
      </g>
    </svg>
  );

  const popupMenuElements = props.menuData.map((m) => (
    <li className="popup_menu__list-item" key={m.id}>
      <Link
        to={m.link}
        spy={true}
        smooth={true}
        duration={500}
        className="popup_menu__list-link"
        onClick={() => setMenuActive(!menuActive)}
      >
        {m.text}
      </Link>
    </li>
  ));
  return (
    <div className={menuActive ? "popup_menu active" : "popup_menu"}>
      <div className="popup_menu__inner">
        <div className="popup_menu__topside">
          <h3 className="popup_menu__title">Menu</h3>
          <button
            className="popup_menu__btn"
            aria-label="close"
            onClick={() => setMenuActive(!menuActive)}
          >
            {closeBtn}
          </button>
        </div>
        <ul className="popup_menu__list">{popupMenuElements}</ul>
      </div>
    </div>
  );
}

export default PopupMenu;
