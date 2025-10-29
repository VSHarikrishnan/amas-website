import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import { fetchAllTeamMembers } from '../../api/api';
const teamMembers = [];
const teamMembers1 = [
    {
        id: 1,
        name: 'Tomy',
        role: 'Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 2,
        name: 'Suneesh',
        role: 'Assistant Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 3,
        name: 'Bijin',
        role: 'PRO',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 4,
        name: 'Ashik',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 5,
        name: 'Shrujith',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    }, {
        id: 1,
        name: 'Tomy',
        role: 'Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 2,
        name: 'Suneesh',
        role: 'Assistant Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 3,
        name: 'Bijin',
        role: 'PRO',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 4,
        name: 'Ashik',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 5,
        name: 'Shrujith',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    }, {
        id: 1,
        name: 'Tomy',
        role: 'Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 2,
        name: 'Suneesh',
        role: 'Assistant Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 3,
        name: 'Bijin',
        role: 'PRO',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 4,
        name: 'Ashik',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 5,
        name: 'Shrujith',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    }, {
        id: 1,
        name: 'Tomy',
        role: 'Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 2,
        name: 'Suneesh',
        role: 'Assistant Director',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 3,
        name: 'Bijin',
        role: 'PRO',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 4,
        name: 'Ashik',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
    {
        id: 5,
        name: 'Shrujith',
        role: 'Instructor',
        image: 'https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
];

const AboutUs = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        const loadteamMembers = async () => {
            try {
                const data = await fetchAllTeamMembers();
                setTeamMembers(data.data || []); // ✅ ensures non-null
                console.log("✅ teamMembers loaded:", data.data);
            } catch (err) {
                console.error("❌ Failed to load teamMembers:", err);
            }
        };
        loadteamMembers();
    }, []);
    return (
        <div className="about-us-amas">
            {/* Left section: Story */}
            <div className="amas-story">
                <h2>Our Journey</h2>
                <p>
                    Adventure Mountaineering and Survival Kerala (AMAS) was born from a deep love for the mountains and the spirit of adventure.
                    What started as a small group of outdoor enthusiasts has grown into one of Kerala’s most respected NGOs in the field of mountaineering and adventure sports.
                </p>
                <p>
                    The motivation was simple – to reconnect people with nature, teach survival skills, and build mental and physical resilience through outdoor challenges.
                    We’ve since trained hundreds of participants, organized numerous treks, rope courses, and mountaineering expeditions.
                </p>
                <p>
                    Today, AMAS continues to inspire people of all ages to break limits, discover their strength, and cultivate discipline and confidence.
                    We are proud of the lives we’ve touched and the trails we’ve blazed together.
                </p>
            </div>

            {/* Right section: Team members */}
            <div className="amas-team">
                {teamMembers && teamMembers.length > 0 ? (
                    <>
                        <h2>Meet Our Team</h2>
                        <div className="team-grid">
                            {teamMembers.map((member) => (
                                <div key={member._id} className="team-card">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team-img"
                                    />
                                    <div className="team-info">
                                        <h4>{member.name}</h4>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="team-grid"></div>
                )}
            </div>
        </div>
    );
};

export default AboutUs;
