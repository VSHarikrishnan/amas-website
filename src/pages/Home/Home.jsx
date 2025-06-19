import React, { useEffect, useState } from 'react';

import './HomePage.css';




const HomePage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 17;
        const duration = 4000; // total duration in ms
        const stepTime = Math.floor(duration / end); // how fast to count up
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, []);
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content-box">
                    <h2>Academy for Mountaineering and Adventure Sports</h2>
                    <p>
                        Since 2006, AMAS Kerala has been providing unparalleled programs
                        and training in adventure sports.
                    </p>
                    <p>
                        We guarantee extremely safe, adventure filled, memorable days
                        with your friends or like spirited adventurers!
                    </p>
                    <div className="experience-box">
                        <h2 className="number">{count}<span>+</span></h2>
                        <h6>Safe & Thrilling Years</h6>
                    </div>

                </div>

                <div className="image-group">
                    <img
                        src="https://amaskerala.org/assets/images/home/amas-quick/resized/rappeling.jpg"
                        alt="Rappelling"
                        className="about-img-half"
                    />
                    <div className="icon-box center-icon">
                        <i className="fas fa-campground"></i>
                    </div>
                    <img
                        src="https://amaskerala.org/assets/images/home/amas-quick/resized/trampoulin.jpg"
                        alt="Trampoline"
                        className="about-img-half"
                    />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
