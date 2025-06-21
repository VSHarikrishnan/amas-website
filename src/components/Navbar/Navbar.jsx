import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import navItems from './navItems';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef(null); // 👈 To detect outside clicks

    const handleNavClick = () => {
        setIsOpen(false);
        setOpenDropdown(null);
    };

    // Handle scroll visibility
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 10);
            setOpenDropdown(null); // 👈 This line collapses the open submenu
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detect click outside navbar to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderNavItem = (section, label) => {
        if (typeof label === 'string') {
            return (
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
            );
        } else {
            return (
                <li key={section} className="nav-item dropdown">
                    <div
                        className="nav-link dropdown-toggle"
                        onClick={() =>
                            setOpenDropdown(openDropdown === section ? null : section)
                        }
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)} ▼
                    </div>
                    {openDropdown === section && (
                        <ul className="dropdown-menu">
                            {Object.entries(label).map(([subKey, subLabel]) => (
                                <li key={subKey}>
                                    <Link
                                        to={subKey}
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        onClick={handleNavClick}
                                        className="dropdown-link"
                                    >
                                        {subLabel}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            );
        }
    };

    return (
        <nav className={`navbar ${!isVisible ? 'hidden' : ''}`} ref={navRef}>
            <div className="navbar-container">
                <div className="logo-wrapper">

                    <Link to="landing" smooth={true} duration={1000} offset={-10} className="logo">
                        <img
                            src="https://amaskerala.org/assets/images/logo/amas-logo-text.png"
                            alt="Logo"
                            className="navbar-logo-img"
                        />
                    </Link>
                </div>
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

                <ul className="nav-links-horizontal">
                    {Object.entries(navItems).map(([section, label]) => renderNavItem(section, label))}
                    <li>
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <div className="sidebar">
                    <ul className="nav-links-vertical">
                        {Object.entries(navItems).map(([section, label]) => renderNavItem(section, label))}
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
