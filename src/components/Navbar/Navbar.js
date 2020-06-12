import React from 'react';
import "./Navbar.scss";
import logo from '../../logo.png';

function Navbar(props) {
    return (
        <div className="navigation">
            <nav className="navbar">
                <img src={logo} alt='city-tour-logo'/>
                    <ul className="nav-links">
                        <li><a href="/" className="nav-link active">home</a></li>
                        <li><a href="/" className="nav-link">about</a></li>
                        <li><a href="/" className="nav-link ">tours</a></li>
                    </ul>
            </nav>
        </div>
    );
}

export default Navbar;