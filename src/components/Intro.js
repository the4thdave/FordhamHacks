import React from "react";
import "./Intro.css";
import logo from "../assets/fhlogo.svg";
import sponsorship from "../assets/sponsorship.pdf"
import cityscape from "../assets/purplecityscape.png";

const Intro = props => {
  return (
    <div id="intro">
      <img id="logo" src={logo} alt="FordhamHacks logo" />
      <div className="text-container">
        <h2 className="date neon-fuschia">January 25-26, 2020</h2>
        <h2 className="location neon-fuschia">
          Fordham University Lincoln Center
        </h2>
      </div>
      <div className="button-container">
          <a href="https://fordhamhacks.typeform.com/to/FvHXJT" className="button1">
              <svg width="275" height="50">
                  <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#E178ED" />
                          <stop offset="100%" stopColor="#9B7DE1" />
                      </linearGradient>
                  </defs>
                  <rect x="2" y="5" rx="10" fill="none" stroke="url(#gradient)" width="260" height="40"> </rect>
              </svg>
              <span>Pre-Register</span>
          </a>
          <a href={sponsorship} className="button2">
              <svg width="275" height="50">
                  <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#E178ED" />
                          <stop offset="100%" stopColor="#9B7DE1" />
                      </linearGradient>
                  </defs>
                  <rect x="2" y="5" rx="10" fill="none" stroke="url(#gradient)" width="260" height="40"> </rect>
              </svg>
              <span>Sponsor</span>
          </a>
      </div>
        <img id="cityscape" src={cityscape} alt="Cityscape" />
    </div>
  );
};

export default Intro;
