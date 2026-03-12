// src/pages/Home/HomePage.jsx
// ============================================================
// HOME SECTION — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Link as RouterLink } from 'react-router-dom';
import { fetchHomeData } from '../../api/MockData';
import './HomePage.css';

const HomePage = () => {
    const [data, setData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // ── Load data ─────────────────────────────────────────────
    useEffect(() => {
        fetchHomeData()
            .then(setData)
            .catch((err) => console.error('[HomePage] Data load failed:', err));
    }, []);

    // ── Auto-rotate image pair every 5 s ──────────────────────
    useEffect(() => {
        if (!data) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data]);

    if (!data) return null;

    const { heading, eyebrow, paragraphs, cta, slides } = data;
    const yearsOfService = new Date().getFullYear() - data.foundedYear;
    const selected = slides[currentIndex];

    return (
        <section className="home-section">
            <div className="home-container">

                {/* ── LEFT: Text content ── */}
                <div className="home-content-box">

                    <span className="home-eyebrow">{eyebrow}</span>

                    <h2
                        dangerouslySetInnerHTML={{
                            // Allows wrapping a keyword in <span> from data for accent colour
                            __html: heading,
                        }}
                    />

                    {paragraphs.map((text, i) => (
                        <p key={i}>{text}</p>
                    ))}

                    {/* Counter */}
                    <div className="experience-box">
                        <h2 className="number">
                            <CountUp end={yearsOfService} duration={8} />
                            <span>+</span>
                        </h2>
                        <div className="exp-label">
                            <strong>Years of Service</strong>
                            <span>Safe &amp; Thrilling Adventures</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <RouterLink to={cta.href} className="home-cta">
                        {cta.label}
                        <span className="home-cta-arrow">→</span>
                    </RouterLink>
                </div>

                {/* ── RIGHT: Image pair ── */}
                <div className="image-group">
                    <img
                        key={`left-${selected.id}`}
                        src={selected.leftImage}
                        alt={selected.leftAlt}
                        className="home-img-half fade-image"
                    />

                    {/* Centre icon badge */}
                    <div className="icon-box center-icon">
                        <i className={selected.icon} />
                    </div>

                    <img
                        key={`right-${selected.id}`}
                        src={selected.rightImage}
                        alt={selected.rightAlt}
                        className="home-img-half fade-image"
                    />

                    {/* Dot indicators */}
                    <div className="image-slide-counter">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                className={`image-slide-dot${currentIndex === i ? ' active' : ''}`}
                                onClick={() => setCurrentIndex(i)}
                                aria-label={`View slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HomePage;