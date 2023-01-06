import {React, useState} from "react";

import './Header.css';

import Logo from "../UI/Logo";
import Menu from '../UI/Menu';
import HeaderContent from "./HeaderContent";
import PopupMenu from "../UI/PopupMenu";

function Header(props) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className="header" id="header">
      <PopupMenu menuData={props.menuData} menuActive={menuActive} setMenuActive={setMenuActive} />
      <nav className="header__menu">
        <Logo />
        <Menu menuData={props.menuData} />
        <button className="header__btn" onClick={() => setMenuActive(!menuActive)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </nav>
      <HeaderContent playersLinksData={props.playersLinksData} />
    </header>
  );
}

export default Header;
