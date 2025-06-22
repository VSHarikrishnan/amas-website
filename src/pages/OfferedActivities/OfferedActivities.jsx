import React from 'react';
import './OfferedActivities.css';
import { getIconClass } from '../../Utils/Icons';

const offeredActivities = [
    {
        id: 1,
        title: "Mountaineering",
        subtitle: "Everything you need to scale mountains – rock climbing, rappelling and more.",
        icon: getIconClass("hiking"),
    },
    {
        id: 2,
        title: "Water Sports",
        subtitle: "From banana boats to jet skis – soaked in fun and adventure.",
        icon: "fa-solid fa-sailboat",
    },
    {
        id: 3,
        title: "Land Activities",
        subtitle: "Nature hikes and thrilling rope adventures await.",
        icon: "fa-solid fa-earth-europe",
    },
    {
        id: 4,
        title: "Camping",
        subtitle: "Campfires, stories, and sunrises – soulfully unforgettable.",
        icon: "fas fa-campground",
    },
    {
        id: 5,
        title: "Private Events",
        subtitle: "Team building to student programs – tailored just for you.",
        icon: "fa-solid fa-people-roof",
    },
    {
        id: 6,
        title: "Training",
        subtitle: "Sharpen your skills with training from seasoned experts.",
        icon: "fa-solid fa-compass",
    }
];


function OfferedActivities() {
    return (
        <section className="offered-activities-section">
            <h2 className="events-heading">
                <p className="thin">We are experts in offering
                </p>  Exciting Adventures <span className="thin" />
            </h2>
            <div className="container">
                <div className="activities-grid">
                    {offeredActivities.map(activity => (
                        <div key={activity.id} className="activity-card">
                            <div className="icon-title-line">
                                <i className={activity.icon}></i>
                                <h5>{activity.title}</h5>
                            </div>
                            <div className="title-underline-combined"></div>
                            <h3 className="subtitle">{activity.subtitle}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OfferedActivities;