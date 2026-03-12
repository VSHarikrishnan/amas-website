// src/pages/Testimonials/Testimonials.jsx
// ============================================================
// TESTIMONIALS — Adventure NGO
// - Uses Zustand reviewDataStore (existing)
// - Switch import to '../../api/api' when backend is ready
// ============================================================

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useReviewDataStore from '../../store/reviewDataStore';
import { fetchAllReviews } from '../../api/MockData';
import './Testimonials.css';

// ── Slider settings ───────────────────────────────────────
const SLIDER_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 3, centerPadding: '0px' },
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1, centerMode: false, dots: true },
        },
    ],
};

// ── Star renderer ─────────────────────────────────────────
const Stars = ({ rating }) => (
    <div className="star-row">
        {Array.from({ length: 5 }).map((_, i) => (
            <i
                key={i}
                className={i < rating ? 'fa fa-star' : 'fa fa-star-o'}
            />
        ))}
    </div>
);

// ── Format date ───────────────────────────────────────────
const formatDate = (raw) => {
    if (!raw) return '';
    const d = new Date(raw.split('T')[0]);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short' });
};

// ============================================================
// COMPONENT
// ============================================================
const Testimonials = () => {
    const { reviews, setReviews } = useReviewDataStore();

    useEffect(() => {
        fetchAllReviews()
            .then((data) => {
                // Handles both { data: [...] } (API) and flat array (mock)
                setReviews(Array.isArray(data) ? data : data.data || []);
            })
            .catch((err) => console.error('[Testimonials] Load failed:', err));
    }, []);

    if (!reviews?.length) return null;

    return (
        <section className="testimonials-section">

            {/* ── Header ── */}
            <div className="testimonials-header">
                <div className="testimonials-eyebrow">Trekker Stories</div>
                <h2>What Our <span>Community</span> Says</h2>
                <p>Real experiences from the adventurers who trusted us with their journeys.</p>
            </div>

            {/* ── Slider ── */}
            <div className="testimonials-slider-wrap">
                <Slider {...SLIDER_SETTINGS}>
                    {reviews.map((review) => (
                        <div key={review.id} className="testimonial-slide">
                            <div className="testimonial-card">

                                {/* Quote watermark */}
                                <span className="testimonial-quote-mark">"</span>

                                {/* Top row: date + stars */}
                                <div className="testimonial-top-row">
                                    <span className="testimonial-date">
                                        {formatDate(review.date)}
                                    </span>
                                    <Stars rating={review.rating} />
                                </div>

                                {/* Comment */}
                                <p className="testimonial-comment">
                                    {review.comment || review.feedback || review.text}
                                </p>

                                {/* Divider */}
                                <div className="testimonial-divider" />

                                {/* Author */}
                                <div className="test_holder">
                                    <div className="test_icon">
                                        <img
                                            src={review.image || review.avatar}
                                            alt={review.name}
                                            onError={(e) => {
                                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=272343&color=00b34b`;
                                            }}
                                        />
                                    </div>
                                    <div className="test_name">
                                        <h3>{review.name}</h3>
                                        <p>{review.role || review.location || 'Adventure Member'}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </section>
    );
};

export default Testimonials;