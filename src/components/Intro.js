import React from "react";
import "./Intro.css";
import cityscape from "../assets/fordhamhackscity.svg";

const Intro = props => {
  return (
    <div className="intro">
      <h2 className="date neon-fuschia">January 25-26, 2020</h2>
      <h2 className="location neon-fuschia">
        Fordham University Lincoln Center
      </h2>
      <a href="" class="button1">
        <svg width="275" height="50">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#E178ED" />
              <stop offset="100%" stop-color="#9B7DE1" />
            </linearGradient>
          </defs>
          <rect x="2" y="5" rx="10" fill="none" stroke="url(#gradient)" width="260" height="40"></rect>
        </svg>
        <span>Pre-Register</span>
      </a>
      <a href="" class="button2">
        <svg width="275" height="50">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#E178ED" />
              <stop offset="100%" stop-color="#9B7DE1" />
            </linearGradient>
          </defs>
          <rect x="2" y="5" rx="10" fill="none" stroke="url(#gradient)" width="260" height="40"></rect>
        </svg>
        <span>Sponsors</span>
      </a>
      <img id="cityscape" src={cityscape} alt="Cityscape" />
    </div>
  );
};

export default Intro;
