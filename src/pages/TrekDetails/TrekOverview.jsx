import React from 'react';
import './TrekOverview.css';

const TrekOverview = ({ trek }) => {
    return (
        <div id="overview" className="overview-section">
            {/* Heading */}
            <h2 className="overview-title">Overview</h2>

            {/* Description and Blog Link */}
            <div className="overview-content">
                <p className="overview-description">{trek.description}</p>
                {trek.blogLink && (
                    <p className="overview-blog">
                        <strong>
                            <a href={trek.blogLink} target="_blank" rel="noopener noreferrer">
                                Here's a photo blog of our previous trek to {trek.name}.
                            </a>
                        </strong>
                    </p>
                )}
            </div>

            {/* Key Points List */}
            <ul className="overview-list">
                <li><strong>Altitude:</strong> {trek.altitude}</li>
                <li><strong>Distance:</strong> {trek.distance} km</li>
                <li><strong>Difficulty:</strong> {trek.difficulty}</li>
                <li><strong>Season:</strong> {trek.season}</li>
                <li><strong>Group Size:</strong> {trek.groupSize}</li>
                <li><strong>Estimated Time:</strong> 5–7 hours</li>
            </ul>

            {/* Trip Summary Line */}
            <div className="overview-summary-line">
                <span className="summary-item">
                    <i className="fa fa-clock-o"></i> {trek.duration} {trek.duration > 1 ? 'Days' : 'Day'}
                </span>
                <span className="summary-item">
                    <i className="fa fa-calendar"></i> {new Date(trek.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <span className="summary-item">
                    <i className="fa fa-map-marker"></i> {trek.location}
                </span>
            </div>
        </div>
    );
};

export default TrekOverview;
