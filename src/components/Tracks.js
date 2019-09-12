import React from "react";
import "./Tracks.css";
import socialIcon from "../assets/socialicon.png";
import healthIcon from "../assets/healthicon.png";
import disasterIcon from "../assets/disastericon.png";
import cybersecurityIcon from "../assets/cybersecurityicon.png";
import fintechIcon from "../assets/fintechicon.png";

const Tracks = props => {
  return (
    <div id="tracks">
      <h1 className="header neon-green">Tracks</h1>
      <div className="wrapper">
        <div className="content">
          <div className="card">
            <img className="icon" src={socialIcon} alt="Impact on Diversity & Social Good icon"/>
            <p className="title">Impact on Diversity & Social Good</p>
            <p className="text">
              Encourage diversity in STEM and make it easier to change the world through humanitarianism, education, and politics!
            </p>
          </div>
          <div className="card">
            <img className="icon" src={healthIcon} alt="Health Tech icon"/>
            <p className="title">Health Tech</p>
            <p className="text">
              Improve the way we live our lives by encouraging healthier physical and mental lifestyle changes!
            </p>
          </div>
          <div className="card">
            <img className="icon" src={disasterIcon} alt="Environment & Disaster Relief icon"/>
            <p className="title">Environment & Disaster Relief</p>
            <p className="text">
              Help slow down the deterioration of the environment and alleviate the effects of natural disasters!
            </p>
          </div>
          <div className="card">
            <img className="icon" src={cybersecurityIcon} alt="Cybersecurity icon"/>
            <p className="title">Cybersecurity</p>
            <p className="text">
              Hack to help protect others from getting hacked and prevent data from getting into the wrong hands!
            </p>
          </div>
          <div className="card">
            <img className="icon" src={fintechIcon} alt="FinTech icon"/>
            <p className="title">FinTech</p>
            <p className="text">
              Contribute to the innovative tech in the finance industry by disrupting the way we handle finance!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
