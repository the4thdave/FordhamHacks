import React from 'react';
import './Tracks.css';

const Tracks = (props) => {
    return (
      <div className="tracks">
        <h1 className="header neon">Tracks</h1>
        <div className="wrapper">
          <div className="content">
            <div className="card">
              <p className="title">Impact on Diversity & Social Good</p>
              <p className="text">Help encourage more diversity in STEM or make it easier for others to positively impact the world
                  through humanitarian work, education, politics - the possibilities are endless!</p>
              </div>
              <div className="card">
                <p className="title">Health Tech</p>
                <p className="text">Improve the way we live our lives by encouraging healthier physical and mental lifestyle changes.</p>
              </div>
              <div className="card">
                <p className="title">Environment & Disaster Relief</p>
                <p className="text">With climate change becoming an increasing threat to our world, and natural disasters becoming harder to recover from,
                    build to protect from the more dangerous side of nature!</p>
              </div>
              <div className="card">
                <p className="title">Cybersecurity</p>
                <p className="text">In today's climate, security online has become equally, if not more important, to protect than security offline.
                    Hack to protect others from getting hacked.</p>
              </div>
              <div className="card">
                <p className="title">FinTech</p>
                <p className="text">Technology is incredibly useful when it comes to finance, aiding with stock market risk analysis, cryptocurrency,
                    AI for bank processing, and more. Work to contribute to the ongoing innovation in the finance industry.</p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Tracks;
