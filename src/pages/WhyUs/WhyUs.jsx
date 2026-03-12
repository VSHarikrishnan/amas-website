// src/pages/WhyUs/WhyUs.jsx
// ============================================================
// WHY US — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useEffect, useState } from 'react';
import { fetchWhyUsData } from '../../api/MockData';
import './WhyUs.css';

const WhyUs = () => {
    const [data, setData] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetchWhyUsData()
            .then(setData)
            .catch((err) => console.error('[WhyUs] Data load failed:', err));
    }, []);

    // Cycle images every 5 s
    useEffect(() => {
        if (!data) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data]);

    if (!data) return null;

    const { eyebrow, heading, subheading, badge, images, reasons } = data;

    return (
        <div className="why-trust-us-container">

            {/* ── LEFT: cycling image ── */}
            <div
                className="why-trust-image-section"
                style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
                {/* Floating stat badge */}
                <div className="why-image-badge">
                    <span className="why-image-badge-number">{badge.value}</span>
                    <span className="why-image-badge-label">{badge.label}</span>
                </div>
            </div>

            {/* ── RIGHT: content ── */}
            <div className="why-trust-content-section">

                <span className="why-eyebrow">{eyebrow}</span>

                <h2
                    className="why-trust-heading"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />

                <p className="why-trust-subheading">{subheading}</p>

                <ul className="reasons-list">
                    {reasons.map((reason) => (
                        <li key={reason.id} className="reason-item">

                            {/* Icon — uses FA class if provided, falls back to emoji */}
                            <div className="reason-icon-wrap">
                                {reason.icon.startsWith('fa') ? (
                                    <i className={reason.icon} />
                                ) : (
                                    <span className="reason-icon-emoji">{reason.icon}</span>
                                )}
                            </div>

                            <div className="reason-text">
                                <div className="reason-title">{reason.title}</div>
                                <div className="reason-subcontent">{reason.subcontent}</div>
                            </div>

                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default WhyUs;