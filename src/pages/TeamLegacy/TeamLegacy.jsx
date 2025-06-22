import React from 'react';
import CountUp from 'react-countup';
import './TeamLegacy.css'; // Import CSS styling

const TeamLegacy = () => {
    return (
        <section className="team-legacy-section">
                <div className="legacy-row">
                    {/* Experience Content Left */}
                    <div className="experience-content">
                        <div className="section-title">
                            <h2>
                                <span className="thin"> The most </span>
                                Experienced
                                <span className="thin"> team you can get </span>
                            </h2>
                        </div>
                        <p>
                            With nearly 2 decades in adventure sports, rest assured that you
                            are in safe hands. Having conducted hundreds of events across
                            India, we know how to deal with every terrain, and every
                            situation.
                        </p>
                    </div>

                    {/* Activities Grid Right */}
                    <div className="activities">
                        <div className="activity">
                            <i className="fa-solid fa-house-flag"></i>
                            <h2 className="counter-number"><CountUp end={3200} duration={3} />+</h2>
                            <p>Adventurers</p>
                        </div>
                        <div className="activity">
                            <i className="fa-solid fa-tents"></i>
                            <h2 className="counter-number"><CountUp end={200} duration={3} />+</h2>
                            <p>Nights Camped</p>
                        </div>
                        <div className="activity">
                            <i className="fa-solid fa-map-location"></i>
                            <h2 className="counter-number"><CountUp end={42} duration={3} />+</h2>
                            <p>Locations</p>
                        </div>
                        <div className="activity">
                            <i className="fa-solid fa-people-roof"></i>
                            <h2 className="counter-number"><CountUp end={100} duration={3} />+</h2>
                            <p>Community Events</p>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default TeamLegacy;
