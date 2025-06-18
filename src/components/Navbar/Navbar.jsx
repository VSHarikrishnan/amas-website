// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const navItems = {
    '/': 'Home',
    '/treks': 'Treks',
    '/gallery': 'Gallery',
    '/events': 'Events',
    '/contactus': 'Contact Us',
    '/aboutus': 'About Us',
    '/login': 'Login',
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="logo">AMAS Kerala</NavLink>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>

                {/* Horizontal Navbar (desktop/tablet only) */}
                <ul className="nav-links-horizontal">
                    {Object.entries(navItems).map(([path, label]) => (
                        <li key={path}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sidebar (mobile only) */}
            {isOpen && (
                <div className="sidebar">
                    <ul className="nav-links-vertical">
                        {Object.entries(navItems).map(([path, label]) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                    onClick={handleNavClick}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
