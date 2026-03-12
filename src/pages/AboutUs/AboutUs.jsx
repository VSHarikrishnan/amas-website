// src/pages/AboutUs/AboutUs.jsx
// ============================================================
// ABOUT US — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useEffect, useState } from 'react';
import { fetchAboutData} from '../../api/MockData';
import { fetchAllTeamMembers } from '../../api/api';
import './AboutUs.css';

const AboutUs = () => {
    const [about, setAbout] = useState(null);
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        // Load both in parallel
        Promise.all([fetchAboutData(), fetchAllTeamMembers()])
            .then(([aboutData, teamData]) => {
                setAbout(aboutData);
                // Handles both { data: [...] } (API) and flat array (mock)
                setTeamMembers(Array.isArray(teamData) ? teamData : teamData.data || []);
            })
            .catch((err) => console.error('[AboutUs] Data load failed:', err));
    }, []);

    if (!about) return null;

    const { eyebrow, heading, paragraphs, mission, values, team } = about;

    return (
        <section className="about-us-section">
            <div className="about-us-inner">

                <div className="about-top-row">

                    {/* LEFT col — story + mission */}
                    <div>
                        {/* Story */}
                        <div className="amas-story">
                            <span className="about-eyebrow">{eyebrow}</span>
                            <h2 dangerouslySetInnerHTML={{ __html: heading }} />
                            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                        </div>

                        {/* Mission card */}
                        <div className="amas-mission" style={{ marginTop: '2rem' }}>
                            <div className="mission-card">
                                <span className="mission-card-label">Our Mission</span>
                                <h3>{mission.title}</h3>
                                <p>{mission.body}</p>
                            </div>
                            <div className="mission-values">
                                {values.map((v, i) => (
                                    <span key={i} className="mission-value-tag">{v}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT col — team */}
                    <div className="amas-team">
                        <div className="team-header">
                            <div className="team-header-eyebrow">{team.eyebrow}</div>
                            <h2 dangerouslySetInnerHTML={{ __html: team.heading }} />
                        </div>

                        <div className="team-grid">
                            {teamMembers.length > 0 ? (
                                teamMembers.map((member) => (
                                    <div key={member._id || member.id} className="team-card">
                                        <div className="team-img-wrap">
                                            <img
                                                src={member.image || member.avatar}
                                                alt={member.name}
                                                className="team-img"
                                                onError={(e) => {
                                                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=272343&color=00b34b&size=72`;
                                                }}
                                            />
                                        </div>
                                        <div className="team-info">
                                            <h4>{member.name}</h4>
                                            <p>{member.role}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="team-empty">Team information coming soon.</div>
                            )}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutUs;