// src/components/Landing/Landing.jsx
// ============================================================
// LANDING / HERO — Adventure NGO
// Switch import source to '../../api/api' when backend ready.
// ============================================================

import React, { useState, useEffect, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { fetchLandingData } from '../../api/MockData';
import './landing.css';

const Landing = () => {
    const [data, setData] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // ── Load data ───────────────────────────────────────────
    useEffect(() => {
        fetchLandingData()
            .then(setData)
            .catch((err) => console.error('[Landing] Data load failed:', err));
    }, []);

    const handleSlideChange = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    if (!data) return null;

    const { slides, hero } = data;
    const total = slides.length;

    return (
        <div className="landing">

            {/* ── Carousel ── */}
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                interval={4000}
                transitionTime={900}
                stopOnHover={false}
                swipeable={true}
                emulateTouch={true}
                selectedItem={currentSlide}
                onChange={handleSlideChange}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="custom-carousel-slide">
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className="custom-carousel-image"
                        />
                    </div>
                ))}
            </Carousel>

            {/* ── Hero overlay ── */}
            <div className="hero-overlay">

                {/* Label */}
                <div className="hero-label">{hero.label}</div>

                {/* Title */}
                <h1 className="hero-title">
                    {hero.titleLine1}
                    <span>{hero.titleLine2}</span>
                </h1>

                {/* Subtitle */}
                <p className="hero-subtitle">{hero.subtitle}</p>

                {/* CTAs */}
                <div className="hero-actions">
                    <RouterLink to={hero.primaryCta.href} className="hero-btn-primary">
                        {hero.primaryCta.label}
                        <span className="hero-btn-arrow">→</span>
                    </RouterLink>

                    <ScrollLink
                        to={hero.secondaryCta.target}
                        smooth={true}
                        duration={600}
                        offset={-70}
                        className="hero-btn-secondary"
                    >
                        {hero.secondaryCta.label}
                        <span className="hero-btn-arrow">↓</span>
                    </ScrollLink>
                </div>
            </div>

            {/* ── Custom dot indicators (bottom left) ── */}
            <div className="hero-dots">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`hero-dot${currentSlide === i ? ' active' : ''}`}
                        onClick={() => setCurrentSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* ── Slide counter (bottom right) ── */}
            <div className="hero-slide-counter">
                <span className="current">
                    {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="divider" />
                <span>{String(total).padStart(2, '0')}</span>
            </div>

            {/* ── Scroll hint (bottom centre) ── */}
            <div className="hero-scroll-hint">
                <div className="hero-scroll-mouse">
                    <div className="hero-scroll-wheel" />
                </div>
                <span>Scroll</span>
            </div>

        </div>
    );
};

export default Landing;