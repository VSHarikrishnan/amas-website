import React from 'react';
import Slider from 'react-slick';
import testimonials from './TestimonialsData';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    return (
        <div className="testimonials-section">
            <h2 className="section-heading">
                What Our <span className="highlight">Trekkers</span> Say!
            </h2>

            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="testimonial-slide">
                        <div className={`item ${index === 1 ? 'active' : 'side'}`}>
                            <div className="shadow-effect">

                                {/* ✅ Date Row */}
                                <div className="testimonial-date-row">
                                    <span className="testimonial-date">{testimonial.date}</span>
                                </div>

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
                                </div>

                                <div className="test_desc">
                                    <p>{testimonial.feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default Testimonials;
