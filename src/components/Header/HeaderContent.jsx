import React from "react";

import PlayersLinks from "../UI/PlayersLinks";

import header_img from "../../assets/images/header_img.jpg";

function HeaderContent() {
  return (
    <div className="header__content">
      <div className="header__image-wrapper">
        <span className="header__image-decor header__image-decor--1"></span>
        <span className="header__image-decor header__image-decor--2"></span>
        <span className="header__image-decor header__image-decor--3"></span>
        <img src={header_img} alt="header img" className="header__image" />
      </div>
      <div className="header__titles">
        <h1 className="header__title">
          Take your podcast to the{" "}
          <span className="header__title-span header__title-span--1">next</span>{" "}
          <span className="header__title-span header__title-span--2">
            level
          </span>
        </h1>
        <div className="header__links">
          Listen on
          <PlayersLinks />
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
