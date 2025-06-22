import React, { useState, useEffect } from 'react';
import './FAB.css';

function FAB() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100); // Show after 100px scroll
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <button className="fab-scroll-top" onClick={handleClick}>
                    <i className="fa-solid fa-angle-up"></i>
                </button>
            )}
        </>
    );
}

export default FAB;
