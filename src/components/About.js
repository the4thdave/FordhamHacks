import React from 'react';
import './About.css'

const About = (props) => {
    return (
        <div className="about">
            <h2 className="header">All About FordhamHacks</h2>
            <div className="about-info">
                <h3 className="sub-header">Our Mission</h3>
                <p className="content">FordhamHacks is Fordham University’s first-ever 24-hour hackathon hosted at the heart of NYC, the
                    Lincoln Center campus, on January 25-26, 2020. Drawing inspiration from Fordham being a liberal arts
                    school, the FordhamHacks team set out to plan an event that welcomes students from different
                    backgrounds and skill levels. From programmers to entrepreneurs to designers to scientists,
                    FordhamHacks was organized to foster innovative problem solving by gathering ~200 students in and
                    around NYC and giving them a space to explore new solutions with people they normally don’t get the
                    chance to interact with.
                </p>
                <h3 className="sub-header">About Us</h3>
                <p className="content">FordhamHacks was started by a team of programmers, entrepreneurs, and designers. We saw a need for an
                    on-campus event that would offer students the opportunity to take their individual experiences and
                    wide range of knowledge accumulated from the Liberal Arts curriculum and use that to find solutions
                    for important issues. The FordhamHacks team also saw a need to invite students from other schools to
                    increase the diversity of ideas and thus FordhamHacks was born.
                </p>
            </div>
        </div>
    );
};

export default About;