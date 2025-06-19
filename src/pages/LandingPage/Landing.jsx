// src/components/Landing.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './landing.css';

const images = [
    "https://amaskerala.org/assets/images/home/slides/rock-climbing.jpg",
    "https://amaskerala.org/assets/images/home/slides/commando-bridge.jpg",
    "https://amaskerala.org/assets/images/home/slides/camp-fire.jpg",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'https://images.unsplash.com/photo-1600298882525-1ac025c98b68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Landing = () => {
    return (
        <div className="landing">
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={true}
                showStatus={true}
                showArrows={true}
                interval={3000}
                transitionTime={1000}
                stopOnHover={false}
                swipeable={true}
                emulateTouch
            >
                {images.map((img, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={img} alt={`Slide ${index}`} className="carousel-image" />
                    </div>
                ))}
            </Carousel>

            <div className="hero-overlay">
                <h1 className="hero-title">Discover the Mountains</h1>
                <p className="hero-subtitle">Join us for unforgettable treks and mountaineering adventures</p>
                <button className="hero-button">Book Treks</button>
            </div>
        </div>
    );
};

export default Landing;
