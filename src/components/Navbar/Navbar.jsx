import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Navigate, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';
import navItems from './navItems';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const navRef = useRef(null);
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const navigate = useNavigate();
    const handleNavClick = (section) => {
        console.log(section);
        setIsOpen(false);
        setOpenDropdown(null);
        switch (section) {
            case 'login':
                Navigate('/login');
                break;
            case 'register':
                navigate('/register');
                break;
            case 'trek':
                navigate('/trek');
                break;
            case 'contact':
                navigate('/contact');
                break;

            // ... add more non-scroll routes as needed

            default:
                // Scroll-based sections like home, events, about-us, etc.
                if (location.pathname !== '/') {
                    navigate(`/#${section}`);
                }
                break;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 60);
            setOpenDropdown(null);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const renderNavItem = (section, label) => {
        if (typeof label === 'string') {
            return (
                <li key={section}>
                    {isHomePage ? (
                        <ScrollLink
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={-60}
                            onClick={() => handleNavClick(section)}
                            className="nav-link"
                        >
                            {label}
                        </ScrollLink>
                    ) : (
                        <RouterLink to={`/#${section}`} className="nav-link" onClick={() => handleNavClick(section)}>
                            {label}
                        </RouterLink>
                    )}
                </li>
            );
        } else {
            return (
                <li key={section} className="nav-item dropdown">
                    <div
                        className="nav-link dropdown-toggle"
                        onClick={() => setOpenDropdown(openDropdown === section ? null : section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}<span className='dropdown-icon '>▼</span>
                    </div>
                    {openDropdown === section && (
                        <ul className="dropdown-menu">
                            {Object.entries(label).map(([subKey, subLabel]) => (
                                <li key={subKey}>
                                    {isHomePage ? (
                                        <ScrollLink
                                            to={subKey}
                                            smooth={true}
                                            duration={500}
                                            offset={-60}
                                            onClick={() => handleNavClick(section)}
                                            className="dropdown-link"
                                        >
                                            {subLabel}
                                        </ScrollLink>
                                    ) : (
                                        <RouterLink to={`/#${subKey}`} className="dropdown-link" onClick={() => handleNavClick(section)}>
                                            {subLabel}
                                        </RouterLink>
                                    )}
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
                    <RouterLink to="/" className="logo">
                        <img
                            src="https://amaskerala.org/assets/images/logo/amas-logo-text.png"
                            alt="Logo"
                            className="navbar-logo-img"
                        />
                    </RouterLink>
                </div>

                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

                <ul className="nav-links-horizontal">
                    {Object.entries(navItems).map(([section, label]) => renderNavItem(section, label))}
                    <li>
                        <RouterLink to="/login" className="nav-link" onClick={() => handleNavClick(section)}>Login</RouterLink>
                    </li>
                </ul>
            </div>

            {isOpen && (
                <div className="sidebar">
                    <ul className="nav-links-vertical">
                        {Object.entries(navItems).map(([section, label]) => renderNavItem(section, label))}
                        <li>
                            <RouterLink to="/login" className="nav-link" onClick={() => handleNavClick(section)}>Login</RouterLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
