import React from 'react';
import './Tracks.css';
import Collapsible from 'react-collapsible';

const Tracks = (props) => {
    return (
        <div className="tracks">
            <h2 className="header">Tracks</h2>
            <Collapsible trigger="Impact on Diversity and Social Good">
                <p>Help encourage more diversity in STEM or make it easier for others to positively impact the world
                    through humanitarian work, education, politics- the possibilities are endless!</p>
            </Collapsible>
            <Collapsible trigger="Health Tech">
                <p>Improve the way we live our lives by encouraging healthier physical and mental lifestyle changes!</p>
            </Collapsible>
            <Collapsible trigger="Environment & Disaster Relief">
                <p>With climate change becoming an increasing threat to our world and natural disasters becoming harder
                    to recover from, build to alleviate the more dangerous side of nature!</p>
            </Collapsible>
            <Collapsible trigger="Cybersecurity">
                <p>In today’s climate, security online has become equally- if not more important to protect than
                    security offline. Hack to protect others from getting hacked.</p>
            </Collapsible>
            <Collapsible trigger="Fintech">
                <p>There is a lot of technology that goes into finance in the form of stock market risk analysis,
                    cryptocurrency, AI to improve the banking process, and more. Work to contribute to the ongoing
                    innovation in the finance industry.</p>
            </Collapsible>
        </div>
    );
};

export default Tracks;