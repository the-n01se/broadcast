import React from "react";

import logo from "../../assets/images/logo.svg";

function Logo() {
  return (
    <a href="#" className="logo__link">
      <img src={logo} alt="castaway logo" className="logo__img" />
    </a>
  );
}

export default Logo;
