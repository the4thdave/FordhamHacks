import React from 'react';
import facebookLogo from '../assets/f_logo.png'
import twitterLogo from '../assets/Twitter_Logo_Blue.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-left">
                <li>
                    <a href="index.html">
                        <img alt="FordhamHacks Logo" src="favicon.png"/>
                    </a>
                </li>
                <li><h2 className="nav-title">FordhamHacks</h2></li>
            </ul>
            <ul className="nav-social">
                <li>
                    <a href="https://www.facebook.com">
                        <img id="fb" alt="Facebook Logo" src={facebookLogo}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/FordhamHacks">
                        <img id="twitter" alt="Twitter Logo" src={twitterLogo}/>
                    </a>
                </li>
            </ul>
            <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=gray">
                <img id="mlh" src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg" alt="Major League Hacking 2020 Hackathon Season"/>
            </a>
        </div>
    );
};

export default Navbar;
