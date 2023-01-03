import React from "react";
import Logo from "../UI/Logo";

import "./Footer.css";

import inst_icon from "../../assets/images/inst_icon.svg";
import twitter_icon from "../../assets/images/twitter_icon.svg";
import facebook_icon from "../../assets/images/facebook_icon.svg";
import Menu from "../UI/Menu";
import PlayersLinks from "../UI/PlayersLinks";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__leftside">
          <Logo />
          <div className="footer__social">
            <a href="#" className="footer__social-links">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="footer__social-img"
              >
                <path
                  d="M17 2.4375H7C4.23858 2.4375 2 4.67608 2 7.4375V17.4375C2 20.1989 4.23858 22.4375 7 22.4375H17C19.7614 22.4375 22 20.1989 22 17.4375V7.4375C22 4.67608 19.7614 2.4375 17 2.4375Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 11.8073C16.1234 12.6395 15.9812 13.4895 15.5937 14.2363C15.2062 14.9831 14.5931 15.5887 13.8416 15.967C13.0901 16.3452 12.2384 16.4769 11.4077 16.3432C10.5771 16.2096 9.80971 15.8174 9.21479 15.2225C8.61987 14.6275 8.22768 13.8602 8.09402 13.0295C7.96035 12.1988 8.09202 11.3472 8.47028 10.5957C8.84854 9.84417 9.45414 9.23106 10.2009 8.84356C10.9477 8.45606 11.7977 8.3139 12.63 8.43732C13.4789 8.5632 14.2648 8.95878 14.8716 9.56562C15.4785 10.1725 15.8741 10.9584 16 11.8073Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 6.9375H17.51"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="footer__social-links">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="footer__social-img"
              >
                <path
                  d="M23 3.4373C22.0424 4.11278 20.9821 4.62941 19.86 4.96731C19.2577 4.27482 18.4573 3.784 17.567 3.56123C16.6767 3.33847 15.7395 3.3945 14.8821 3.72176C14.0247 4.04902 13.2884 4.63171 12.773 5.39102C12.2575 6.15034 11.9877 7.04964 12 7.9673V8.96729C10.2426 9.01286 8.50127 8.62312 6.93101 7.83275C5.36074 7.04238 4.01032 5.87594 3 4.4373C3 4.4373 -1 13.4373 8 17.4373C5.94053 18.8353 3.48716 19.5362 1 19.4373C10 24.4373 21 19.4373 21 7.93729C21 7.65729 20.97 7.37731 20.92 7.10731C21.9406 6.1008 22.6608 4.83002 23 3.4373Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="footer__social-links">
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="footer__social-img"
              >
                <path
                  d="M11 1.4375H8C6.6739 1.4375 5.4021 1.96428 4.4645 2.90197C3.5268 3.83965 3 5.11142 3 6.4375V9.4375H0V13.4375H3V21.4375H7V13.4375H10L11 9.4375H7V6.4375C7 6.17228 7.1054 5.91793 7.2929 5.73039C7.4804 5.54286 7.7348 5.4375 8 5.4375H11V1.4375Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__rightside">
          <Menu />
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">
                Style Guide
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">
                Instructions
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">
                Changelog
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">
                Credit
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">
                Powered by Webflow
              </a>
            </li>
            <li className="footer__list-item">
              <a href="#" className="footer__list-link">
                Licenses
              </a>
            </li>
          </ul>
          <PlayersLinks playersLinksData={props.playersLinksData} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
