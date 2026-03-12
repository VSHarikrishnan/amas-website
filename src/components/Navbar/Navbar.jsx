// src/components/Navbar/Navbar.jsx
// ============================================================
// All data fetching lives in src/api/api.js
// Swap mock → live there without touching this file.
// ============================================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { fetchNavData } from '../../api/MockData.js';
import './navbar.css';

const SCROLL_OFFSET = -70;

const Navbar = () => {
    const [navData, setNavData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const navRef = useRef(null);
    const lastScrollY = useRef(0);

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // ── Fetch nav data ────────────────────────────────────────
    useEffect(() => {
        fetchNavData()
            .then(setNavData)
            .catch((err) => console.error('[Navbar] Data load failed:', err));
    }, []);

    // ── Smart scroll: hide on down, show on up ────────────────
    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 20);
            setIsVisible(y < 60 || y < lastScrollY.current);
            lastScrollY.current = y;
            setOpenDropdown(null);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Close dropdown on outside click ──────────────────────
    useEffect(() => {
        const onOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target))
                setOpenDropdown(null);
        };
        document.addEventListener('mousedown', onOutside);
        return () => document.removeEventListener('mousedown', onOutside);
    }, []);

    // ── Lock body scroll when mobile menu open ────────────────
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // ── Close all menus on route change ──────────────────────
    useEffect(() => {
        setIsOpen(false);
        setOpenDropdown(null);
    }, [location]);

    const closeAll = useCallback(() => { setIsOpen(false); setOpenDropdown(null); }, []);
    const toggleDropdown = useCallback((key) => setOpenDropdown((p) => (p === key ? null : key)), []);

    // ── Render link based on item.type ────────────────────────
    const renderLink = useCallback(
        (item, className) => {
            const { key, label, type, target } = item;

            if (type === 'route') {
                return <RouterLink key={key} to={target} className={className} onClick={closeAll}>{label}</RouterLink>;
            }
            // scroll
            if (isHomePage) {
                return (
                    <ScrollLink key={key} to={target} smooth duration={600} offset={SCROLL_OFFSET}
                        className={className} activeClass="active" spy onClick={closeAll}>
                        {label}
                    </ScrollLink>
                );
            }
            return <RouterLink key={key} to={`/#${target}`} className={className} onClick={closeAll}>{label}</RouterLink>;
        },
        [isHomePage, closeAll],
    );

    // ── Render nav item (link or dropdown) ───────────────────
    const renderNavItem = useCallback(
        (item, vertical = false) => {
            if (item.type !== 'dropdown') {
                return <li key={item.key}>{renderLink(item, 'nav-link')}</li>;
            }

            const expanded = openDropdown === item.key;
            return (
                <li key={item.key} className={`nav-item dropdown${expanded ? ' open' : ''}`}>
                    <div className="nav-link dropdown-toggle" role="button"
                        onClick={() => toggleDropdown(item.key)}
                        aria-expanded={expanded} aria-haspopup="true">
                        {item.label}
                        <span className="dropdown-icon">▼</span>
                    </div>

                    {expanded && (
                        <ul className={`dropdown-menu${vertical ? ' dropdown-menu--vertical' : ''}`}>
                            {item.children.map((child) => (
                                <li key={child.key}>{renderLink(child, 'dropdown-link')}</li>
                            ))}
                        </ul>
                    )}
                </li>
            );
        },
        [openDropdown, toggleDropdown, renderLink],
    );

    if (!navData) return null; // data loads near-instantly from mock; add a skeleton here if using real API
    const { logo, items, cta } = navData;

    return (
        <>
            <nav
                ref={navRef}
                className={['navbar', !isVisible && 'hidden', isScrolled && 'scrolled'].filter(Boolean).join(' ')}
                aria-label="Main navigation"
            >
                <div className="navbar-container">

                    {/* Logo */}
                    <div className="logo-wrapper">
                        <RouterLink to={logo.href} aria-label={`${logo.alt} — Home`}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="navbar-logo-img"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.insertAdjacentHTML('afterend',
                                        `<span class="logo-text">${logo.fallbackText}<span>${logo.fallbackAccent}</span></span>`);
                                }}
                            />
                        </RouterLink>
                    </div>

                    {/* Desktop links */}
                    <ul className="nav-links-horizontal">
                        {items.map((item) => renderNavItem(item, false))}
                        <li>
                            <RouterLink to={cta.href} className="nav-cta" onClick={closeAll}>{cta.label}</RouterLink>
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <button
                        className={`menu-toggle${isOpen ? ' open' : ''}`}
                        onClick={() => setIsOpen((p) => !p)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        <span className="bar" /><span className="bar" /><span className="bar" />
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} aria-hidden="true" />}

            {/* Mobile sidebar */}
            {isOpen && (
                <aside className="sidebar" aria-label="Mobile navigation">
                    <ul className="nav-links-vertical">
                        {items.map((item) => renderNavItem(item, true))}
                    </ul>
                    <div className="sidebar-cta-wrap">
                        <RouterLink to={cta.href} className="nav-cta" onClick={closeAll}>
                            {cta.label} / Register
                        </RouterLink>
                    </div>
                </aside>
            )}
        </>
    );
};

export default Navbar;