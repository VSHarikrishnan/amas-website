// src/pages/TrekOverviewNew/TrekOverviewNew.jsx
// ============================================================
// TREK OVERVIEW — Adventure NGO
// Switch import to '../../api/api' when backend is ready.
// ============================================================

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../../components/Navbar/Navbar';
import FAB from '../../components/FloatingActionButton/FAB';
import { fetchTrekDataById } from '../../api/api';
import './TrekOverviewNew.css';

// ── Hardcoded for now; replace with useEffect + fetchTrekDataById(id) ──
// When connected to backend, use:
//   const { id } = useParams();
//   useEffect(() => { fetchTrekDataById(id).then(setTrek) }, [id]);
import { MOCK_TREK_OVERVIEW } from '../../api/MockData';
const trekData = MOCK_TREK_OVERVIEW;

const { overviewBasic, highlights, overviewDetails } = trekData.overview;
const basicEntries = Object.entries(overviewBasic);

// ── Reusable section card wrapper ─────────────────────────
const SectionCard = ({ icon, title, children }) => (
    <div className="trek-section-card">
        <div className="trek-section-header">
            <div className="trek-section-icon">
                <i className={icon} />
            </div>
            <h2 className="trek-section-title">{title}</h2>
        </div>
        <div className="trek-section-body">{children}</div>
    </div>
);

// ============================================================
// COMPONENT
// ============================================================
export default function TrekOverviewNew() {
    const [activeTermsTab, setActiveTermsTab] = useState(0);
    const [activeCarryTab, setActiveCarryTab] = useState(0);

    return (
        <div>
            <Navbar />
            <div className="trek-overview-page">

                {/* ── HERO ── */}
                <div className="hero-section">
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        showArrows={false}
                        showIndicators={false}
                        interval={5000}
                    >
                        {trekData.images.map((img, i) => (
                            <div key={i} className="custom-carousel-slide">
                                <img src={img} alt={`trek-${i}`} className="custom-carousel-image" />
                            </div>
                        ))}
                    </Carousel>

                    <div className="hero-banner">
                        <div className="hero-banner-sub">Adventure Trek</div>
                        <h1>{trekData.name}</h1>
                    </div>
                </div>

                {/* ── BASIC DETAILS STRIP ── */}
                <div className="basic-details-section">
                    <div className="basic-details-container">
                        {trekData.basicDetailsTab.map((item, i) => (
                            <div className="basic-detail-card" key={i}>
                                <div className="basic-detail-icon">
                                    {item.faIcon
                                        ? <i className={item.faIcon} />
                                        : <img src={item.icon} alt={item.title} />
                                    }
                                </div>
                                <p className="basic-detail-title">{item.title}</p>
                                <p className="basic-detail-value">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── MAIN CONTENT ── */}
                <div className="trek-content-area">

                    {/* OVERVIEW */}
                    <SectionCard icon="fa-solid fa-binoculars" title="Overview">

                        {/* Key info grid */}
                        <div className="overview-basic-grid">
                            {basicEntries.map(([key, value]) => (
                                <div className="overview-grid-item" key={key}>
                                    <span className="overview-grid-key">{key}:</span>
                                    <span className="overview-grid-val">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="overview-sub">
                            <div className="overview-sub-title">Highlights</div>
                            <ul className="highlights-list">
                                {highlights.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>

                        {/* Overview detail sections */}
                        {overviewDetails.map((section, i) => (
                            <React.Fragment key={i}>
                                <div className="section-divider" />
                                <div className="overview-sub">
                                    <div className="overview-sub-title">{section.title}</div>
                                    <ul>
                                        {section.value.map((point, j) => <li key={j}>{point}</li>)}
                                    </ul>
                                </div>
                            </React.Fragment>
                        ))}
                    </SectionCard>

                    {/* PARTICIPANT CRITERIA */}
                    <SectionCard icon="fa-solid fa-users" title={trekData.participantCriteria.title}>
                        {trekData.participantCriteria.value.map((item, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <div className="section-divider" />}
                                <div className="participant-block">
                                    <div className="participant-subtitle">{item.subtitle}</div>
                                    <ul>
                                        {item.value.map((point, j) => <li key={j}>{point}</li>)}
                                    </ul>
                                </div>
                            </React.Fragment>
                        ))}
                    </SectionCard>

                    {/* ITINERARY */}
                    <SectionCard icon="fa-solid fa-route" title={trekData.itinerary.title}>
                        <div className="itinerary-list">
                            {trekData.itinerary.value.map((day, i) => (
                                <div className="itinerary-day" key={i}>
                                    <div className="itinerary-subtitle">{day.subtitle}</div>
                                    <ul>
                                        {day.value.map((point, j) => <li key={j}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* TERMS & CONDITIONS */}
                    <SectionCard icon="fa-solid fa-file-contract" title={trekData.termsConditions.title}>
                        <div className="trek-tabs">
                            {trekData.termsConditions.tabs.map((tab, i) => (
                                <button
                                    key={i}
                                    className={`trek-tab-btn${activeTermsTab === i ? ' active' : ''}`}
                                    onClick={() => setActiveTermsTab(i)}
                                >
                                    {tab.tab}
                                </button>
                            ))}
                        </div>
                        <div className="trek-tab-content">
                            {trekData.termsConditions.tabs[activeTermsTab].sections.map((section, i) => (
                                <div key={i} className="terms-block">
                                    <div className="terms-subtitle">{section.subtitle}</div>
                                    <ul className="terms-list">
                                        {section.value.map((point, j) => <li key={j}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                    {/* THINGS TO CARRY */}
                    <SectionCard icon="fa-solid fa-bag-shopping" title={trekData.thingsToCarry.title}>
                        <div className="trek-tabs">
                            {trekData.thingsToCarry.tabs.map((tab, i) => (
                                <button
                                    key={i}
                                    className={`trek-tab-btn${activeCarryTab === i ? ' active' : ''}`}
                                    onClick={() => setActiveCarryTab(i)}
                                >
                                    {tab.tab}
                                </button>
                            ))}
                        </div>
                        <div className="trek-tab-content">
                            {trekData.thingsToCarry.tabs[activeCarryTab].sections.map((section, i) => (
                                <div key={i} className="terms-block">
                                    <div className="terms-subtitle">{section.subtitle}</div>
                                    <ul className="terms-list">
                                        {section.value.map((point, j) => <li key={j}>{point}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </SectionCard>

                </div>
            </div>
            <FAB />
        </div>
    );
}