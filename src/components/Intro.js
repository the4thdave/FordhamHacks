import React from 'react';
import './Intro.css'

const Intro = (props) => {
    return (
        <div className="intro">
            <h2 className="intro-header">Fordham University’s First 24-Hour Hackathon</h2>
            <p>January 25-26, 2020</p>
            <p>Fordham University Lincoln Center</p>
            <button className="button">Apply</button>
            <button className="button">Sponsors</button>
        </div>
    );
};

export default Intro;