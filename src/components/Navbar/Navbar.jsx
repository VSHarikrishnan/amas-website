// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const navItems = {
    'landing': 'Home',
    'treks': 'Treks',
    'gallery': 'Gallery',
    'events': 'Events',
    'contactus': 'Contact Us',
    'aboutus': 'About Us',
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="landing" smooth={true} duration={100} offset={-10} className="logo">
                    AMAS Kerala
                </Link>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

                <ul className="nav-links-horizontal">
                    {Object.entries(navItems).map(([section, label]) => (
                        <li key={section}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                offset={-60}
                                onClick={handleNavClick}
                                className="nav-link"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <div className="sidebar">
                    <ul className="nav-links-vertical">
                        {Object.entries(navItems).map(([section, label]) => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                    onClick={handleNavClick}
                                    className="nav-link"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="/login" className="nav-link">Login</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
