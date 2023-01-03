import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import logo from "../../assets/images/logo.svg";

function Logo() {
  return (
    <Link
      to="header"
      spy={true}
      smooth={true}
      duration={500}
      style={{cursor: "pointer"}}
      onClick={scroll.scrollToTop}
    >
      <img src={logo} alt="castaway logo" className="logo__img" />
    </Link>
  );
}

export default Logo;
