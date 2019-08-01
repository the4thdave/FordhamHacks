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
        </div>
    );
};

export default Navbar;