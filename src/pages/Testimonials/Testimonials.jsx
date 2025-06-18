// src/components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import testimonials from './TestimonialsData';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % total);
        }, 4000);
        return () => clearInterval(interval);
    }, [total]);

    const getVisibleTestimonials = () => {
        const prev = (activeIndex - 1 + total) % total;
        const next = (activeIndex + 1) % total;
        return [prev, activeIndex, next].map(i => testimonials[i]);
    };

    const getClassName = (index) => {
        if (index === 1) return 'owl-item active';      // middle
        return 'owl-item side';                         // side elements
    };

    return (
        <div className="testimonials-section">
            <h2>What Our Trekkers Say</h2>
            <div className="owl-carousel">
                {getVisibleTestimonials().map((testimonial, i) => (
                    <div key={testimonial.id} className={getClassName(i)}>
                        <div className="item">
                            <div className="shadow-effect">
                                <div className="test_holder">
                                    <div className="test_icon">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <div className="test_name">
                                        <h3>{testimonial.name}</h3>
                                        <p>{testimonial.role}</p>
                                        <div className="star_1">
                                            {Array.from({ length: testimonial.rating }).map((_, idx) => (
                                                <i key={idx} className="fa fa-star"></i>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="quotes">
                                        <img
                                            src="https://www.trekkersofindia.com/frontend/images/quotes.png"
                                            alt="quote"
                                        />
                                    </div>
                                </div>
                                <div className="test_desc">
                                    <p>{testimonial.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
