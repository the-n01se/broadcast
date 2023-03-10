import React from "react";

import PlayersLinks from "../UI/PlayersLinks";

import header_img from "../../assets/images/header_img.jpg";
import header_img_webp from "../../assets/images/header_img.webp";

function HeaderContent(props) {
  return (
    <div className="header__content">
      <picture className="header__img">
        <source srcSet={header_img_webp} type="image/webp" />
        <img src={header_img} alt="" />
      </picture>
      <div className="header__titles">
        <h1 className="header__title">
          Take your podcast to the{" "}
          <span className="header__title-span header__title-span--1">next</span>{" "}
          <span className="header__title-span header__title-span--2">
            level
          </span>
        </h1>
        <div className="header__links">
          <span>Listen on</span>
          <PlayersLinks playersLinksData={props.playersLinksData} setAlertActive={props.setAlertActive} />
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
