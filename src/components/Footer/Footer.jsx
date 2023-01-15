import React from "react";
import Logo from "../UI/Logo";

import "./Footer.css";

import Menu from "../UI/Menu";
import PlayersLinks from "../UI/PlayersLinks";

function Footer(props) {
  const iconsElements = props.footerIconData.map((f) => (
    <button
      key={f.id}
      role={f.role}
      className="footer__social-link"
      onClick={() => props.setAlertActive(true)}
    >
      {f.icon}
    </button>
  ));
  const listItems = props.footerMenuData.map((m) => (
    <li key={m.id} className="footer__list-item">
      <button
        className="footer__list-link"
        onClick={() => props.setAlertActive(true)}
      >
        {m.text}
      </button>
    </li>
  ));

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__leftside">
          <Logo />
          <div className="footer__social">{iconsElements}</div>
        </div>
        <div className="footer__rightside">
          <Menu menuData={props.menuData} />
          <ul className="footer__list">{listItems}</ul>
          <PlayersLinks playersLinksData={props.playersLinksData} setAlertActive={props.setAlertActive} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
