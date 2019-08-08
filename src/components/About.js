import React from 'react';
import './About.css'

const About = (props) => {
    return (
        <div id="about">
            <h1 className="header neon-green">Our Mission</h1>
              <p className="content">FordhamHacks is Fordham University’s first-ever 24-hour hackathon hosted at the heart of NYC, the
                  Lincoln Center campus, on January 25-26, 2020. Drawing inspiration from Fordham being a liberal arts
                  school, the FordhamHacks team set out to plan an event that welcomes students from different
                  backgrounds and skill levels. From programmers, to entrepreneurs, to designers, to scientists,
                  FordhamHacks was organized to foster innovative problem-solving by gathering ~200 students in and
                  around NYC at a space where they can explore new solutions with people they normally don’t get the
                  chance to interact with.
              </p>
        </div>
    );
};

export default About;
