import React, { useEffect, useState } from 'react';
import './WhyUs.css';

const reasonToChoose = [
    {
        id: 1,
        icon: '🧗‍♂️',
        title: 'Expert Instructors',
        subcontent: 'Our team consists of trained mountaineers with years of real-world expedition experience.',
    },
    {
        id: 2,
        icon: '🛡️',
        title: 'Uncompromised Safety',
        subcontent: 'We follow strict international standards for safety equipment and protocols.',
    },
    {
        id: 3,
        icon: '🎯',
        title: 'Wide Range of Activities',
        subcontent: 'From high-altitude treks to rock climbing and rope courses, we cover it all.',
    },
    {
        id: 4,
        icon: '💰',
        title: 'Affordable Packages',
        subcontent: 'We believe adventure should be accessible to everyone.',
    },
];

const imageList = [
    'https://amaskerala.org/assets/images/home/why-trust/rock-climbing.jpg',
    'https://amaskerala.org/assets/images/home/40-adventures/resized/rock-climbing.jpg  ',
    'https://amaskerala.org/assets/images/home/40-adventures/resized/sailing.jpg',
];

const WhyUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Cycle through images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const backgroundImageStyle = {
        backgroundImage: `url(${imageList[currentImageIndex]})`,
    };

    return (
        <div className="why-trust-us-container">
            <div className="why-trust-image-section" style={backgroundImageStyle}></div>
            <div className="why-trust-content-section">
                <h2 className="why-trust-heading">
                    Why people <strong>choose us</strong>
                </h2>
                <ul className="reasons-list">
                    {reasonToChoose.map((reason) => (
                        <li key={reason.id} className="reason-item">
                            <div className="reason-icon">{reason.icon}</div>
                            <div>
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
