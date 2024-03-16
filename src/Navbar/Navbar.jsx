// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav-bar'>
            <div className='name-logo'>
                <p>Wajeeha <span>Usman</span>.</p>
            </div>
            <div className='nav-links'>
                <button className='toggle-btn' onClick={toggleNavbar}>X</button>
                <ul className={`${isOpen ? '' : 'show'}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/AboutMe'>About Me</Link></li>
                    <li><Link to='/Portfolio'>My Projects</Link></li>
                    <li><Link to='/Contact Me'>Contact Me</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
