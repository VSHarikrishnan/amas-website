import React from 'react';
import './TrekCard.css';

const TrekCard = ({ trek }) => {
    return (
        <div className="trek-card">
            <div className="image-wrapper">
                <img src={trek.image} alt={trek.name} className="trek-img" />
                {trek.badge && (
                    <span className="badge" style={{ backgroundColor: trek.badgeColor }}>
                        {trek.badge}
                    </span>
                )}
            </div>
            <div className="trek-details">
                <h3>{trek.name}</h3>
                <p className="description">{trek.description}</p>

                <div className="info-row">
                    <div className="location">📍 {trek.location}</div>
                    <div className="datetime">
                        <div>{trek.date}</div>
                        <div>{trek.time}</div>
                    </div>
                </div>

                <div className="info-row">
                    <span>⛰️ {trek.difficulty}</span>
                    <span>📆 {trek.duration} Days</span>
                </div>

                <div className="info-row">
                    <span>❤️ {trek.likes}</span>
                    <span>💬 {trek.comments}</span>
                    <span>⭐ {trek.rating}</span>
                </div>

                <div className="btn-row">
                    <button className="info-btn">Get Info</button>
                    <button className="date-btn">View Dates</button>
                </div>
            </div>
        </div>
    );
};

export default TrekCard;
