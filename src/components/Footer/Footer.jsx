import React from 'react'
import Logo from '../UI/Logo';

import "./Footer.css"

import inst_icon from "../../assets/images/inst_icon.svg";
import twitter_icon from "../../assets/images/twitter_icon.svg";
import facebook_icon from "../../assets/images/facebook_icon.svg";
import Menu from '../UI/Menu';
import PlayersLinks from '../UI/PlayersLinks';

function Footer(props) {
  return ( 
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__leftside">
          <Logo />
          <div className="footer__social">
            <a href="#" className="footer__social-links">
              <img src={inst_icon} alt="" className="footer__social-img" />
            </a>
            <a href="#" className="footer__social-links">
              <img src={twitter_icon} alt="" className="footer__social-img" />
            </a>
            <a href="#" className="footer__social-links">
              <img src={facebook_icon} alt="" className="footer__social-img" />
            </a>
          </div>
        </div>
        <div className="footer__rightside">
          <Menu />
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">Style Guide</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">Instructions</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">Changelog</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">Credit</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">Powered by Webflow</a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">Licenses</a>
            </li>
          </ul>
          <PlayersLinks playersLinksData={props.playersLinksData} />
        </div>
      </div>
    </footer>
   );
}

export default Footer;