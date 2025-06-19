// src/pages/UpcomingEvents/UpcomingEvents.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './UpcomingEvents.css';
import treksData from '../Treks/TrekData';

const UpcomingEvents = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const formatDate = (date) => date.toISOString().split('T')[0];

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const match = treksData.find(e => e.date === formatDate(date));
            if (match) {
                return (
                    <div
                        className="event-dot"
                        title={`${match.name}\n${match.location} | ${match.date} - ${match.time}`}
                    >📌</div>
                );
            }
        }
        return null;
    };

    const handleDateClick = (date) => {
        setSelectedDate(formatDate(date));
    };

    const eventsForSelectedDate = treksData.filter(e => e.date === selectedDate);

    return (
        <div className="upcoming-events-container1">
            <div className="upcoming-events">
                <div className="calendar-section">
                    <h2>Upcoming Events</h2>
                    <Calendar
                        onClickDay={handleDateClick}
                        tileContent={tileContent}
                    />
                </div>

                <div className="event-cards-section">
                    {eventsForSelectedDate.length > 0 ? (
                        <div className="event-scroll-row">
                            {eventsForSelectedDate.map((trek) => (
                                <div key={trek.id} className="trek-card">
                                    <div className="image-wrapper">
                                        <img src={trek.image} alt={trek.name} className="trek-img" />
                                        {trek.badge && (
                                            <span
                                                className="badge"
                                                style={{ backgroundColor: trek.badgeColor }}
                                            >
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
                            ))}
                        </div>
                    ) : (
                        <p className="no-events-text">Click a marked date to view events</p>
                    )}
                </div>
            </div>

            </div>
    );
};

export default UpcomingEvents;
