import React from "react";

import './Header.css';

import Logo from "../UI/Logo";
import Menu from '../UI/Menu';
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <Logo />
        <Menu />
      </nav>
      <HeaderContent />
    </header>
  );
}

export default Header;
