// src/pages/TeamLegacy/TeamLegacy.jsx
// ============================================================
// TEAM LEGACY — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { fetchTeamLegacyData } from '../../api/MockData';
import './TeamLegacy.css';

const TeamLegacy = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchTeamLegacyData()
            .then(setData)
            .catch((err) => console.error('[TeamLegacy] Data load failed:', err));
    }, []);

    if (!data) return null;

    const { eyebrow, heading, body, features, stats } = data;

    return (
        <section className="team-legacy-section">
            <div className="legacy-row">

                {/* ── LEFT: Text content ── */}
                <div className="experience-content">
                    <span className="legacy-eyebrow">{eyebrow}</span>

                    <div className="section-title">
                        <h2
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />
                    </div>

                    <p>{body}</p>

                    {/* Feature bullets */}
                    {features?.length > 0 && (
                        <ul className="legacy-features">
                            {features.map((f, i) => (
                                <li key={i} className="legacy-feature">{f}</li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* ── RIGHT: Stats grid ── */}
                <div className="activities">
                    {stats.map((stat) => (
                        <div key={stat.id} className="activity">
                            <i className={stat.icon} />
                            <h2 className="counter-number">
                                <CountUp end={stat.value} duration={3} separator="," />
                                {stat.suffix}
                            </h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamLegacy;