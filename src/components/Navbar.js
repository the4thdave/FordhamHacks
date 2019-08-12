import React from "react";
import facebookLogo from "../assets/iconmonstr-facebook-5.svg";
import twitterLogo from "../assets/iconmonstr-twitter-5.svg";
import instagramLogo from "../assets/iconmonstr-instagram-15.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-left">
        <li>
          <a href="index.html">
            <img alt="FordhamHacks Logo" src="favicon.png" />
          </a>
        </li>
        <li>
          <a className="nav-link" href="#about">
            <h4 className="nav-title">About</h4>
          </a>
        </li>
        <li>
          <a className="nav-link" href="#tracks">
            <h4 className="nav-title">Tracks</h4>
          </a>
        </li>
        <li>
          <a className="nav-link" href="#faq">
            <h4 className="nav-title">FAQ</h4>
          </a>
        </li>
      </ul>
      <ul className="nav-social">
        <li>
          <a href="https://www.facebook.com">
            <img id="fb" src={facebookLogo} alt="Facebook Logo"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/FordhamHacks">
            <img id="twitter"  src={twitterLogo} alt="Twitter Logo"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fordhamhacks/">
            <img id="ig" src={instagramLogo} alt="Instagram Logo"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
