import React from 'react';
import './ItinerarySection.css';
import { itineraryData } from '../TrekDetails';

const ItinerarySection = () => {
    const { days, thingsToCarry, pickupPoints, insurance, dosAndDonts } = itineraryData;

    return (
        <div id="itinerary" className="section itinerary-section">
            <h2 className="section-heading">Itinerary</h2>

            <div className="itinerary-content">
                {days.map((day, idx) => (
                    <div key={idx} className="day-block">
                        <p className="day-title">{day.title}</p>
                        <ul className="day-list">
                            {day.activities.map((activity, i) => (
                                <li key={i}>{activity}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <hr className="divider" />

                <h3 className="subheading">Things to Carry</h3>
                <ul className="checklist">
                    {thingsToCarry.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>

                <h3 className="subheading">Standard Pick-up Points</h3>
                <ul className="checklist">
                    {pickupPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                    ))}
                </ul>

                <hr className="divider" />

                <h3 className="subheading">Trek Insurance</h3>
                <p>
                    {insurance.description}{' '}
                    <a href={insurance.linkUrl} target="_blank" rel="noreferrer">
                        {insurance.linkText}
                    </a>
                </p>

                <h3 className="subheading">Do’s and Don’ts</h3>
                <ul className="checklist">
                    {dosAndDonts.map((rule, idx) => (
                        <li key={idx}>{rule}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ItinerarySection;
