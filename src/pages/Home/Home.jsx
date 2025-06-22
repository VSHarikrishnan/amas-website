import React, { useEffect, useState } from 'react';
import './HomePage.css';
import homeData from './HomeData'; // Assuming homeData is an array of objects with left_image, right_image, and icon properties
import CountUp from 'react-countup';

const HomePage = () => {
    const [count, setCount] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Counter animation
    useEffect(() => {
        let start = 0;
        const end = 19;
        const duration = 4000;
        const stepTime = Math.floor(duration / end);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, stepTime);
        return () => clearInterval(timer);
    }, []);

    // Image rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % homeData.length);
        }, 5000); // ⏱ Change image every 5 seconds

        return () => clearInterval(interval); // Clean up
    }, []);

    const selectedItem = homeData[currentIndex];

    return (
        <section className="home-section">
            <div className="home-container">
                <div className="home-content-box">
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
                        <h2 className="number"><CountUp end={19} duration={3} /><span>+</span></h2>
                        <h6 className="highlight-zoom">Safe & Thrilling Years</h6>
                    </div>
                </div>

                <div className="image-group">
                    <img
                        key={selectedItem.left_image}
                        src={selectedItem.left_image}
                        alt="Left Adventure"
                        className="home-img-half fade-image"
                    />
                    <div className="icon-box center-icon">
                        <i className={selectedItem.icon}></i>
                    </div>
                    <img
                        key={selectedItem.right_image}
                        src={selectedItem.right_image}
                        alt="Right Adventure"
                        className="home-img-half fade-image"
                    />

                </div>
            </div>
        </section>
    );
};

export default HomePage;