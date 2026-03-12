// src/pages/OfferedActivities/OfferedActivities.jsx
// ============================================================
// OFFERED ACTIVITIES — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useEffect, useState } from 'react';
import { fetchOfferedActivities } from '../../api/MockData';
import './OfferedActivities.css';

const OfferedActivities = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchOfferedActivities()
            .then(setData)
            .catch((err) => console.error('[OfferedActivities] Data load failed:', err));
    }, []);

    if (!data) return null;

    const { header, activities } = data;

    return (
        <section className="offered-activities-section">

            {/* ── Section header ── */}
            <div className="activities-header">
                <div className="activities-eyebrow">{header.eyebrow}</div>
                <h2 dangerouslySetInnerHTML={{ __html: header.title }} />
                <p>{header.subtitle}</p>
            </div>

            {/* ── Cards grid ── */}
            <div className="activities-grid">
                {activities.map((activity, index) => (
                    <div key={activity.id} className="activity-card">

                        {/* Watermark number */}
                        <span className="activity-card-number">
                            {String(index + 1).padStart(2, '0')}
                        </span>

                        {/* Icon */}
                        <div className="activity-icon-wrap">
                            <i className={activity.icon} />
                        </div>

                        {/* Title */}
                        <h5 className="activity-title">{activity.title}</h5>

                        {/* Divider */}
                        <div className="activity-divider" />

                        {/* Description */}
                        <p className="activity-subtitle">{activity.subtitle}</p>

                        {/* Tag */}
                        {activity.tag && (
                            <span className="activity-tag">{activity.tag}</span>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default OfferedActivities;